import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATHS, IPagingQueryResult, ISLTDayChi } from 'src/app/Interface/module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SoLuongTonDayChiService {

  baseUrl: string;


  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'https://localhost:44329/api/SLT_DayChi/';
 

  }
  public GetListSLTDayChi(skipCount: number, maxCount: number, date: String): Observable<IPagingQueryResult<ISLTDayChi>> {

    const url = `${environment.apiDomain}${API_PATHS.SoLuongDayChi}?skipCount=${skipCount}&maxCount=${maxCount}&date=${date}`;
    return this.httpClient.get<IPagingQueryResult<ISLTDayChi>>(url); 
  }
  
  public GetAllnqlchi(): Observable<ISLTDayChi[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<ISLTDayChi[]>(this.baseUrl + 'GetAll', { headers: this.getHeaders() });
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