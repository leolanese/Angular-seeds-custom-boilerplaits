import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import {Observable, of, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import { ApiResponse } from '../../interfaces/response.interface';
import { ApiRequest } from '../../interfaces/request.interface';

@Injectable()
export class ApiService {
  private static readonly API_URL = 'https://jsonplaceholder.typicode.com/';
  private static readonly PATH_all = 'todos';
  private static readonly PATH_users = 'users';

  constructor(
    private http: HttpClient
  ) {}

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  getData(path: string, params: HttpParams = new HttpParams()): Observable<ApiResponse> {
    return this.http
      .get<ApiRequest>(`${ApiService.API_URL}${path}`, { params })
      .pipe(
        map((httpResponse: any) => {
          return httpResponse;
        }),
        catchError((response: ApiResponse) => {
          return of(response);
        })
      );
  }
}
