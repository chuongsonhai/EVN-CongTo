import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDanhMucTem, ITaiKhoan, INQLTem } from 'src/app/Interface/module';

@Injectable({
  providedIn: 'root'
})
export class NguoiQuanLyTemService {

  baseUrl: string;
  urrl:string;
  Tem:string;
  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'https://localhost:44329/api/NQL_Tem/';
    this.urrl    = 'https://localhost:44329/api/DM_Ten_KDV/';
    this.Tem     = 'https://localhost:44329/api/DM_Tem/'
  }
  
  public GetAllnqlchi(): Observable<INQLTem[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<INQLTem[]>(this.baseUrl + 'GetAll', { headers: this.getHeaders() });
  }
  
  public GetnqlchiID(id: number): Observable<INQLTem> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<INQLTem>(this.baseUrl + id, { headers: this.getHeaders() });
  }
  
  // ADD, POST METHOD
  public Createnql(entry: INQLTem): Observable<INQLTem> {
    return this.httpClient.post<INQLTem>(this.baseUrl +'create', entry, { headers: this.getHeaders() });
  }
  // ADD, POST METHOD
  public Update(id: number, entry: INQLTem): Observable<INQLTem> {
    return this.httpClient.put<INQLTem>(this.baseUrl + id, entry, { headers: this.getHeaders() });
  }
  public Delete(id: number): Observable<INQLTem> {
    return this.httpClient.delete<INQLTem>(this.baseUrl + id, { headers: this.getHeaders() });
  }
  
  public GetAllDMtenKDV(): Observable<ITaiKhoan[]> {
    const headers = new Headers();
     headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<ITaiKhoan[]>(this.urrl + 'GetAll', { headers: this.getHeaders() });
  }
  public GetAllDMchi(): Observable<IDanhMucTem[]> {
    const headers = new Headers();
     headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<IDanhMucTem[]>(this.Tem + 'GetAll', { headers: this.getHeaders() });
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