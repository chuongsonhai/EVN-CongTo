import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDanhMucDayChi, ITaiKhoan, IKDVDayChi } from 'src/app/Interface/module';

@Injectable({
  providedIn: 'root'
})
export class KiemdinhviendaychiService {

  baseUrl: string;
  urrl:string;
  Tem:string;
  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'https://localhost:44329/api/KDV_DayChi/';
    this.urrl    = 'https://localhost:44329/api/DM_Ten_KDV/';
    this.Tem     = 'https://localhost:44329/api/DM_DayChi/'
  }
  
  public GetAlldkvtem(): Observable<IKDVDayChi[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<IKDVDayChi[]>(this.baseUrl + 'GetAll', { headers: this.getHeaders() });
  }
  
  public GetdkvdaychiID(id: number): Observable<IKDVDayChi> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<IKDVDayChi>(this.baseUrl + id, { headers: this.getHeaders() });
  }
  
  // ADD, POST METHOD
  public CreateKdv(entry: IKDVDayChi): Observable<IKDVDayChi> {
    return this.httpClient.post<IKDVDayChi>(this.baseUrl +'create', entry, { headers: this.getHeaders() });
  }
  // ADD, POST METHOD
  public Update(id: number, entry: IKDVDayChi): Observable<IKDVDayChi> {
    return this.httpClient.put<IKDVDayChi>(this.baseUrl + id, entry, { headers: this.getHeaders() });
  }
  public Delete(id: number): Observable<IKDVDayChi> {
    return this.httpClient.delete<IKDVDayChi>(this.baseUrl + id, { headers: this.getHeaders() });
  }
  
  public GetAllDMtenKDV(): Observable<ITaiKhoan[]> {
    const headers = new Headers();
     headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<ITaiKhoan[]>(this.urrl + 'GetAll', { headers: this.getHeaders() });
  }
  public GetAllDMdaychi(): Observable<IDanhMucDayChi[]> {
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
  