import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ApiResponse } from '../../interfaces/response.interface';
import { ApiRequest } from '../../interfaces/request.interface';

@Injectable()
export class ApiCarService {
  private static readonly API_URL_CARS = 'https://warm-dawn-92320.herokuapp.com/models/';
  private static readonly API_URL_CAR = 'https://warm-dawn-92320.herokuapp.com/model/';

  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  getDataCars(): Observable<ApiResponse> {
    return this.http.get<ApiRequest>(`${ApiCarService.API_URL_CARS}`).pipe(
      map((httpResponse: any) => {
        return httpResponse;
      }),
      catchError((response: ApiResponse) => {
        return of(response);
      })
    );
  }

  getDataCar(path: string): Observable<ApiResponse> {
    return this.http.get<ApiRequest>(`${ApiCarService.API_URL_CAR}${path}`).pipe(
      map((httpResponse: any) => {
        return httpResponse;
      }),
      catchError((response: ApiResponse) => {
        return of(response);
      })
    );
  }
}
