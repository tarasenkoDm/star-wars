import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  get(url: string): Observable<object> {
    return this.http.get(url).pipe(
      map((response: any) => response),
      catchError((err: HttpErrorResponse) => {
        this.errorService.setErrorMessage(err);
        return throwError(err);
      })
    );
  }
}
