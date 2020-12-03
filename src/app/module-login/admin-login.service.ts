import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITaiKhoan } from '../Interface/module';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  baseURL:string;
  public Current_user:ITaiKhoan;
  constructor(private httpClient: HttpClient) { 
    this.baseURL = 'https://localhost:44329/api/TaiKhoan/'
  }

  Login(entry:ITaiKhoan):Observable<ITaiKhoan> {
    return this.httpClient.post<ITaiKhoan>( this.baseURL +'login', entry,{ headers: this.getHeaders() });
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
