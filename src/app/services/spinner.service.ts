import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinnerStatus = new Subject<boolean>();
  private counter = 0;

  constructor() { }

  getSpinnerStatus(): Observable<boolean> {
    return this.spinnerStatus.asObservable();
  }

  activateSpinner() {
    if (this.counter === 0) {
      this.spinnerStatus.next(true);
    }
    this.counter++;
  }

  deactivateSpinner() {
    this.counter--;
    if (this.counter === 0) {
      this.spinnerStatus.next(false);
    }
  }
}
