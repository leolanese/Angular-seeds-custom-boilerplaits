import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import {Observable, of, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import { ApiResponse } from '../../interfaces/response.interface';
import { ApiRequest } from '../../interfaces/request.interface';

@Injectable()
export class ApiCarService {
  private static readonly API_URL = 'https://warm-dawn-92320.herokuapp.com/models/';

  constructor(
    private http: HttpClient
  ) {}

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  getData(path: string, params: HttpParams = new HttpParams()): Observable<ApiResponse> {
    return this.http
      .get<ApiRequest>(`${ApiCarService.API_URL}`)
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
