import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import {Observable, of, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import { ApiResponse } from '../../interfaces/response.interface';

@Injectable()
export class ApiService {
  private static readonly API_URL = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<ApiResponse> {
    debugger;
    return this.http
      .get(`${ApiService.API_URL}${path}`, { params })
      .pipe(
        map((httpResponse: ApiResponse) => {
          return httpResponse;
        }),
        catchError((response: ApiResponse) => {
          return of(response);
        })
      );
  }
}
