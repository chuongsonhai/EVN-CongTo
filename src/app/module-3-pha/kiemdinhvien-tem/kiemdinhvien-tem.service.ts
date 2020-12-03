import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATHS, IDanhMucTem, IKDVTem, IPagingQueryResult, ITaiKhoan } from 'src/app/Interface/module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KiemdinhvienTemService {
  // constructor(private _http: HttpClient) { }

 
//   getList(skipCount: number, maxCount: number, sortBy: string, 
//     ascSorting: boolean, keyWord: string): Observable<IPagingQueryResult<IKDVTem>> {
// // tslint:disable-next-line: max-line-length
// const url = `${environment.apiDomain}${API_PATHS.KiemDinhVien_Tem}?skipCount=${skipCount}&maxCount=${maxCount}&sortBy=${sortBy}&ascSorting=${ascSorting}&keyWord=${encodeURI(keyWord)}`;
// return this._http.get<IPagingQueryResult<IKDVTem>>(url);
// }

// getDetail(id:number): Observable<IKDVTem> {
// const url = `${environment.apiDomain}${API_PATHS.KiemDinhVien_Tem}/${id}`;
// return this._http.get<any>(url);
// }

// remove(id:number): Observable<any> {
// const url = `${environment.apiDomain}${API_PATHS.KiemDinhVien_Tem}/${id}`;
// return this._http.delete<any>(url);
// }

// create(entry:IKDVTem):Observable<IKDVTem> {
// const url = `${environment.apiDomain}${API_PATHS.KiemDinhVien_Tem}`;
// return this._http.post<IKDVTem>(url, entry);
// }

// update(entry:IKDVTem):Observable<IKDVTem> {
// const url = `${environment.apiDomain}${API_PATHS.KiemDinhVien_Tem}/${entry.id}`;
// return this._http.put<IKDVTem>(url, entry);
// }
// getAlldanhmuctem(): Observable<IDanhMucTem[]> {
// const url = `${environment.apiDomain}${API_PATHS.danhmucTem}/getAll`;
// return this._http.get<IDanhMucTem[]>(url);
// }
// getAlltenkiemdinhvien(): Observable<IDanhMucTenKDV[]> {
// const url = `${environment.apiDomain}${API_PATHS.danhmucTenKDV}/getAll`;
// return this._http.get<IDanhMucTenKDV[]>(url);
// }
// }

baseUrl: string;
urrl:string;
Tem:string;
constructor(private httpClient: HttpClient) { 
  this.baseUrl = 'https://localhost:44329/api/KDV_Tem/';
  this.urrl    = 'https://localhost:44329/api/DM_Ten_KDV/';
  this.Tem     = 'https://localhost:44329/api/DM_Tem/'
}

public GetAlldkvtem(): Observable<IKDVTem[]> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=utf-8');
  return this.httpClient.get<IKDVTem[]>(this.baseUrl + 'GetAll', { headers: this.getHeaders() });
}

public GetdkvtemID(id: number): Observable<IKDVTem> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=utf-8');
  return this.httpClient.get<IKDVTem>(this.baseUrl + id, { headers: this.getHeaders() });
}

// ADD, POST METHOD
public CreateKdv(entry: IKDVTem): Observable<IKDVTem> {
  return this.httpClient.post<IKDVTem>(this.baseUrl +'create', entry, { headers: this.getHeaders() });
}
// ADD, POST METHOD
public Update(id: number, entry: IKDVTem): Observable<IKDVTem> {
  return this.httpClient.put<IKDVTem>(this.baseUrl + id, entry, { headers: this.getHeaders() });
}
public Delete(id: number): Observable<IKDVTem> {
  return this.httpClient.delete<IKDVTem>(this.baseUrl + id, { headers: this.getHeaders() });
}

public GetAllDMtenKDV(): Observable<ITaiKhoan[]> {
  const headers = new Headers();
   headers.append('Content-Type', 'application/json; charset=utf-8');
  return this.httpClient.get<ITaiKhoan[]>(this.urrl + 'GetAll', { headers: this.getHeaders() });
}
public GetAllDMTem(): Observable<IDanhMucTem[]> {
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
