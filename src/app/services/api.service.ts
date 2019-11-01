import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ApiService {
  private static readonly API_URL = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    debugger;
    return this.http
      .get(`${ApiService.API_URL}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }
}
