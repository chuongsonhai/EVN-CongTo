import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATHS, IDanhMucDayChi, IPagingQueryResult } from 'src/app/Interface/module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DanhmucDaychiService {

  baseURL:string;
  constructor(private httpClient: HttpClient) { 
    this.baseURL = 'https://localhost:44329/api/DM_DayChi/'
  }
  getList(skipCount: number, maxCount: number, sortBy: string, 
    ascSorting: boolean, keyWord: string): Observable<IPagingQueryResult<IDanhMucDayChi>> {
// tslint:disable-next-line: max-line-length
const url = `${environment.apiDomain}${API_PATHS.danhmucDayChi}?skipCount=${skipCount}&maxCount=${maxCount}&sortBy=${sortBy}&ascSorting=${ascSorting}&keyWord=${encodeURI(keyWord)}`;
return this.httpClient.get<IPagingQueryResult<IDanhMucDayChi>>(url);
}
public GetAll(): Observable<IDanhMucDayChi[]> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=utf-8');
  return this.httpClient.get<IDanhMucDayChi[]>(this.baseURL + 'GetAll', { headers: this.getHeaders() });
}

getDetail(id:number): Observable<IDanhMucDayChi> {
const url = `${environment.apiDomain}${API_PATHS.danhmucDayChi}/${id}`;
return this.httpClient.get<any>(url);
}

remove(id:number): Observable<any> {
const url = `${environment.apiDomain}${API_PATHS.danhmucDayChi}/${id}`;
return this.httpClient.delete<any>(url);
}

create(entry:IDanhMucDayChi):Observable<IDanhMucDayChi> {
const url = `${environment.apiDomain}${API_PATHS.danhmucDayChi}`;
return this.httpClient.post<IDanhMucDayChi>(url, entry);
}

update(entry:IDanhMucDayChi):Observable<IDanhMucDayChi> {
const url = `${environment.apiDomain}${API_PATHS.danhmucDayChi}/${entry.id}`;
return this.httpClient.put<IDanhMucDayChi>(url, entry);
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
