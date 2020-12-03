import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_PATHS, IPagingQueryResult, ITaiKhoan } from 'src/app/Interface/module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DanhmucTenKDVService {

// baseUrl: string;
//   constructor(private httpClient: HttpClient) { 
//   }
//   getList(skipCount: number, maxCount: number, sortBy: string, 
//     ascSorting: boolean, keyWord: string): Observable<IPagingQueryResult<IDanhMucTenKDV>> {
// tslint:disable-next-line: max-line-length
// const url = `${environment.apiDomain}${API_PATHS.danhmucTenKDV}?skipCount=${skipCount}&maxCount=${maxCount}&sortBy=${sortBy}&ascSorting=${ascSorting}&keyWord=${encodeURI(keyWord)}`;
// return this.httpClient.get<IPagingQueryResult<IDanhMucTenKDV>>(url);
// }

// getDetail(id:number): Observable<IDanhMucTenKDV> {
// const url = `${environment.apiDomain}${API_PATHS.danhmucTenKDV}/${id}`;
// return this.httpClient.get<any>(url);
// }

// remove(id:number): Observable<any> {
// const url = `${environment.apiDomain}${API_PATHS.danhmucTenKDV}/${id}`;
// return this.httpClient.delete<any>(url);
// }

// create(entry:IDanhMucTenKDV):Observable<IDanhMucTenKDV> {
// const url = `${environment.apiDomain}${API_PATHS.danhmucTenKDV}`;
// return this.httpClient.post<IDanhMucTenKDV>(url, entry);
// }

// update(entry:IDanhMucTenKDV):Observable<IDanhMucTenKDV> {
// const url = `${environment.apiDomain}${API_PATHS.danhmucTenKDV}/${entry.id}`;
// return this.httpClient.put<IDanhMucTenKDV>(url, entry);
// }
// }
baseURL: string; 
constructor(private httpclient: HttpClient) { 
  this.baseURL = 'https://localhost:44329/api/TaiKhoan/'
}
public GetAll(): Observable<ITaiKhoan[]> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=utf-8');
  return this.httpclient.get<ITaiKhoan[]>(this.baseURL + 'GetAll', { headers: this.getHeaders() });
}
public GetTenKDVID(id: number): Observable<ITaiKhoan> {
   //const url = `${environment.apiDomain}${API_PATHS.danhmucTenKDV}/${id}`;
  const headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=utf-8');
  return this.httpclient.get<ITaiKhoan>(this.baseURL + id, { headers: this.getHeaders() });
}
// ADD, POST METHOD
Create(entry: ITaiKhoan): Observable<ITaiKhoan> {
  return this.httpclient.post<ITaiKhoan>( this.baseURL +'create', entry,{ headers: this.getHeaders() });
}
Login(entry:ITaiKhoan):Observable<ITaiKhoan> {
  return this.httpclient.post<ITaiKhoan>( this.baseURL +'login', entry,{ headers: this.getHeaders() });
}
// ADD, POST METHOD
Update(id: number, entry: ITaiKhoan): Observable<ITaiKhoan> {
  //const url = `${environment.apiDomain}${API_PATHS.danhmucTenKDV}/${entry.id}`;
  return this.httpclient.put<ITaiKhoan>(this.baseURL + id, entry, { headers: this.getHeaders() });
}
Delete(id: number): Observable<ITaiKhoan> {
  return this.httpclient.delete<ITaiKhoan>(this.baseURL + id, { headers: this.getHeaders() });
}
private getHeaders() {
  const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
  return headers;
}
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

}
