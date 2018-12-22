import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private errorMessage = new Subject<string>();

  constructor() {}

  getErrorMessage() {
    return this.errorMessage.asObservable();
  }

  setErrorMessage(err: HttpErrorResponse) {
    this.errorMessage.next(
      `${err.status} ${err.error.detail || 'Server Error'}`
    );
  }
}
