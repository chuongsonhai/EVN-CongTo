import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDanhMucDayChi, ITaiKhoan, INQLDayChi } from 'src/app/Interface/module';

@Injectable({
  providedIn: 'root'
})
export class NguoiQuanLyDayChiService {

  baseUrl: string;
  urrl:string;
  Tem:string;
  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'https://localhost:44329/api/NQL_DayChi/';
    this.urrl    = 'https://localhost:44329/api/DM_Ten_KDV/';
    this.Tem     = 'https://localhost:44329/api/DM_DayChi/'
  }
  
  public GetAllnqlchi(): Observable<INQLDayChi[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<INQLDayChi[]>(this.baseUrl + 'GetAll', { headers: this.getHeaders() });
  }
  
  public GetnqlchiID(id: number): Observable<INQLDayChi> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<INQLDayChi>(this.baseUrl + id, { headers: this.getHeaders() });
  }
  
  // ADD, POST METHOD
  public Createnql(entry: INQLDayChi): Observable<INQLDayChi> {
    return this.httpClient.post<INQLDayChi>(this.baseUrl +'create', entry, { headers: this.getHeaders() });
  }
  // ADD, POST METHOD
  public Update(id: number, entry: INQLDayChi): Observable<INQLDayChi> {
    return this.httpClient.put<INQLDayChi>(this.baseUrl + id, entry, { headers: this.getHeaders() });
  }
  public Delete(id: number): Observable<INQLDayChi> {
    return this.httpClient.delete<INQLDayChi>(this.baseUrl + id, { headers: this.getHeaders() });
  }
  
  public GetAllDMtenKDV(): Observable<ITaiKhoan[]> {
    const headers = new Headers();
     headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<ITaiKhoan[]>(this.urrl + 'GetAll', { headers: this.getHeaders() });
  }
  public GetAllDMchi(): Observable<IDanhMucDayChi[]> {
    const headers = new Headers();
     headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<IDanhMucDayChi[]>(this.Tem + 'GetAll', { headers: this.getHeaders() });
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