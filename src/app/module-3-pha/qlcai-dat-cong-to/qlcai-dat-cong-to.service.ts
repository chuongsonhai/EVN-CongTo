import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QLCaiDatCongTo, ITaiKhoan } from 'src/app/Interface/module';

@Injectable({
  providedIn: 'root'
})
export class QLCaiDatCongToService {
  baseUrl: string;
  urrl:string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'https://localhost:44329/api/QL_CaiDat_CTDT/';
    this.urrl    = 'https://localhost:44329/api/DM_Ten_KDV/';

  }
  
  public GetAllnqlchi(): Observable<QLCaiDatCongTo[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<QLCaiDatCongTo[]>(this.baseUrl + 'GetAll', { headers: this.getHeaders() });
  }
  
  public GetnqlchiID(id: number): Observable<QLCaiDatCongTo> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<QLCaiDatCongTo>(this.baseUrl + id, { headers: this.getHeaders() });
  }
  
  // ADD, POST METHOD
  public Createnql(entry: QLCaiDatCongTo): Observable<QLCaiDatCongTo> {
    return this.httpClient.post<QLCaiDatCongTo>(this.baseUrl +'create', entry, { headers: this.getHeaders() });
  }
  // ADD, POST METHOD
  public Update(id: number, entry: QLCaiDatCongTo): Observable<QLCaiDatCongTo> {
    return this.httpClient.put<QLCaiDatCongTo>(this.baseUrl + id, entry, { headers: this.getHeaders() });
  }
  public Delete(id: number): Observable<QLCaiDatCongTo> {
    return this.httpClient.delete<QLCaiDatCongTo>(this.baseUrl + id, { headers: this.getHeaders() });
  }
  
  public GetAllDMtenKDV(): Observable<ITaiKhoan[]> {
    const headers = new Headers();
     headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<ITaiKhoan[]>(this.urrl + 'GetAll', { headers: this.getHeaders() });
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