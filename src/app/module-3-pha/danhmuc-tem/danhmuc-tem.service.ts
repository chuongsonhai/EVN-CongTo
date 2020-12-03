import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATHS, IDanhMucTem, IPagingQueryResult } from 'src/app/Interface/module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DanhmucTemService {
baseURL:string;
  constructor(private httpClient: HttpClient) { 
    this.baseURL = 'https://localhost:44329/api/DM_Tem/'
  }
  getList(skipCount: number, maxCount: number, sortBy: string, 
    ascSorting: boolean, keyWord: string): Observable<IPagingQueryResult<IDanhMucTem>> {
// tslint:disable-next-line: max-line-length
const url = `${environment.apiDomain}${API_PATHS.danhmucTem}?skipCount=${skipCount}&maxCount=${maxCount}&sortBy=${sortBy}&ascSorting=${ascSorting}&keyWord=${encodeURI(keyWord)}`;
return this.httpClient.get<IPagingQueryResult<IDanhMucTem>>(url);
}
public GetAll(): Observable<IDanhMucTem[]> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=utf-8');
  return this.httpClient.get<IDanhMucTem[]>(this.baseURL + 'GetAll', { headers: this.getHeaders() });
}

getDetail(id:number): Observable<IDanhMucTem> {
const url = `${environment.apiDomain}${API_PATHS.danhmucTem}/${id}`;
return this.httpClient.get<any>(url);
}

remove(id:number): Observable<any> {
const url = `${environment.apiDomain}${API_PATHS.danhmucTem}/${id}`;
return this.httpClient.delete<any>(url);
}

create(entry:IDanhMucTem):Observable<IDanhMucTem> {
const url = `${environment.apiDomain}${API_PATHS.danhmucTem}`;
return this.httpClient.post<IDanhMucTem>(url, entry);
}

update(entry:IDanhMucTem):Observable<IDanhMucTem> {
const url = `${environment.apiDomain}${API_PATHS.danhmucTem}/${entry.id}`;
return this.httpClient.put<IDanhMucTem>(url, entry);
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
