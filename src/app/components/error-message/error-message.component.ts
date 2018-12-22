import { Component, OnInit } from '@angular/core';

import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  show = false;
  errorMessage = '';

  constructor(private errorService: ErrorService) {}

  ngOnInit() {
    this.errorService.getErrorMessage().subscribe((message: string) => {
      this.errorMessage = message;
      this.showAlert();
    });
  }

  showAlert() {
    this.show = true;
    setTimeout(() => (this.show = false), 2000);
  }
}
