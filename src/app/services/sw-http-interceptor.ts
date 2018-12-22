import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

import { SpinnerService } from './spinner.service';

@Injectable()
export class SwHttpInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerService.activateSpinner();

    return next.handle(req).pipe(
      map(resp => resp),
      catchError(err => throwError(err)),
      finalize(() => this.spinnerService.deactivateSpinner())
    );
  }
}
