import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATHS, IDanhMucChi, IPagingQueryResult } from 'src/app/Interface/module';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DanhmucChiService {

  baseURL:string;
  constructor(private httpClient: HttpClient) { 
    this.baseURL = 'https://localhost:44329/api/DM_Chi/'
  }
  getList(skipCount: number, maxCount: number, sortBy: string, 
    ascSorting: boolean, keyWord: string): Observable<IPagingQueryResult<IDanhMucChi>> {
// tslint:disable-next-line: max-line-length
const url = `${environment.apiDomain}${API_PATHS.danhmucChi}?skipCount=${skipCount}&maxCount=${maxCount}&sortBy=${sortBy}&ascSorting=${ascSorting}&keyWord=${encodeURI(keyWord)}`;
return this.httpClient.get<IPagingQueryResult<IDanhMucChi>>(url);
}
public GetAll(): Observable<IDanhMucChi[]> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=utf-8');
  return this.httpClient.get<IDanhMucChi[]>(this.baseURL + 'GetAll', { headers: this.getHeaders() });
}
getDetail(id:number): Observable<IDanhMucChi> {
const url = `${environment.apiDomain}${API_PATHS.danhmucChi}/${id}`;
return this.httpClient.get<any>(url);
}

remove(id:number): Observable<any> {
const url = `${environment.apiDomain}${API_PATHS.danhmucChi}/${id}`;
return this.httpClient.delete<any>(url);
}

create(entry:IDanhMucChi):Observable<IDanhMucChi> {
const url = `${environment.apiDomain}${API_PATHS.danhmucChi}`;
return this.httpClient.post<IDanhMucChi>(url, entry);
}

update(entry:IDanhMucChi):Observable<IDanhMucChi> {
const url = `${environment.apiDomain}${API_PATHS.danhmucChi}/${entry.id}`;
return this.httpClient.put<IDanhMucChi>(url, entry);
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
