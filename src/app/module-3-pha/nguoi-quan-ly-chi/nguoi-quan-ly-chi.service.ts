import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDanhMucChi, ITaiKhoan, INQLCHi } from 'src/app/Interface/module';

@Injectable({
  providedIn: 'root'
})
export class NguoiQuanLyChiService {
  baseUrl: string;
  urrl:string;
  Tem:string;
  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'https://localhost:44329/api/NQL_Chi/';
    this.urrl    = 'https://localhost:44329/api/DM_Ten_KDV/';
    this.Tem     = 'https://localhost:44329/api/DM_Chi/'
  }
  
  public GetAllnqlchi(): Observable<INQLCHi[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<INQLCHi[]>(this.baseUrl + 'GetAll', { headers: this.getHeaders() });
  }
  
  public GetnqlchiID(id: number): Observable<INQLCHi> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<INQLCHi>(this.baseUrl + id, { headers: this.getHeaders() });
  }
  
  // ADD, POST METHOD
  public Createnql(entry: INQLCHi): Observable<INQLCHi> {
    return this.httpClient.post<INQLCHi>(this.baseUrl +'create', entry, { headers: this.getHeaders() });
  }
  // ADD, POST METHOD
  public Update(id: number, entry: INQLCHi): Observable<INQLCHi> {
    return this.httpClient.put<INQLCHi>(this.baseUrl + id, entry, { headers: this.getHeaders() });
  }
  public Delete(id: number): Observable<INQLCHi> {
    return this.httpClient.delete<INQLCHi>(this.baseUrl + id, { headers: this.getHeaders() });
  }
  
  public GetAllDMtenKDV(): Observable<ITaiKhoan[]> {
    const headers = new Headers();
     headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<ITaiKhoan[]>(this.urrl + 'GetAll', { headers: this.getHeaders() });
  }
  public GetAllDMchi(): Observable<IDanhMucChi[]> {
    const headers = new Headers();
     headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<IDanhMucChi[]>(this.Tem + 'GetAll', { headers: this.getHeaders() });
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