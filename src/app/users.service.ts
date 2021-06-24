import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
res: Response;
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getssn (user: any) : Observable<JSON>{
    return this.http.post<any>("http://localhost:8080/db2api/getssn", user, httpOptions);
  }

  getmemdetails (user: any) : Observable<JSON>{
    
    return this.http.post<any>("http://localhost:8080//db2api/getDepLoc", user, httpOptions);
  }

  getpcpncr (user: any) : Observable<JSON>{
    
    return this.http.post<any>("http://localhost:8080//db2api/selPcpCus01", user, httpOptions);
  }

  getempdetails (user: any) : Observable<JSON>{
    
    return this.http.post<any>("http://localhost:8080//db2api/selPolV01", user, httpOptions);
  }

  getempconst (user: any) : Observable<JSON>{
    
    return this.http.post<any>("http://localhost:8080//db2api/selEmpPolV02", user, httpOptions);
  }

  }
