import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDangKiTemChi } from 'src/app/Interface/module';

@Injectable({
  providedIn: 'root'
})
export class DangkitemchiService {
  baseUrl: string;
  urrl:string;
  Tem:string;
  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'https://localhost:44329/api/DangKy_TemChi/';

  }
  
  public GetAlldkvtem(): Observable<IDangKiTemChi[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<IDangKiTemChi[]>(this.baseUrl + 'GetAll', { headers: this.getHeaders() });
  }
  
  public GetdkvtemID(id: number): Observable<IDangKiTemChi> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<IDangKiTemChi>(this.baseUrl + id, { headers: this.getHeaders() });
  }
  
  // ADD, POST METHOD
  public CreateKdv(entry: IDangKiTemChi): Observable<IDangKiTemChi> {
    return this.httpClient.post<IDangKiTemChi>(this.baseUrl +'create', entry, { headers: this.getHeaders() });
  }
  // ADD, POST METHOD
  public Update(id: number, entry: IDangKiTemChi): Observable<IDangKiTemChi> {
    return this.httpClient.put<IDangKiTemChi>(this.baseUrl + id, entry, { headers: this.getHeaders() });
  }
  public Delete(id: number): Observable<IDangKiTemChi> {
    return this.httpClient.delete<IDangKiTemChi>(this.baseUrl + id, { headers: this.getHeaders() });
  }
  

  
  
  private getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return headers;
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  }
  
