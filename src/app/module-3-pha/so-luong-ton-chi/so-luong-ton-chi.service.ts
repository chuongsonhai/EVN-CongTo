import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATHS, IDanhMucChi, IPagingQueryResult, ISLTChi } from 'src/app/Interface/module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SoLuongTonChiService {

  baseUrl: string;
  Tem: string;


  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'https://localhost:44329/api/SLT_Chi/';
    // this.Tem     = 'https://localhost:44329/api/DM_Tem/'

  }
  public  GetListSLTChi(skipCount: number, maxCount: number, date: String): Observable<IPagingQueryResult<ISLTChi>> {

    const url = `${environment.apiDomain}${API_PATHS.SoLuongTonChi}?skipCount=${skipCount}&maxCount=${maxCount}&date=${date}`;
    return this.httpClient.get<IPagingQueryResult<ISLTChi>>(url); 
  }
  public GetAllnqlchi(): Observable<ISLTChi[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<ISLTChi[]>(this.baseUrl + 'GetAll', { headers: this.getHeaders() });
  }
  // public GetAllDMtem(): Observable<IDanhMucChi[]> {
  //   const headers = new Headers();
  //    headers.append('Content-Type', 'application/json; charset=utf-8');
  //   return this.httpClient.get<IDanhMucChi[]>(this.Tem + 'GetAll', { headers: this.getHeaders() });
  // }
  
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