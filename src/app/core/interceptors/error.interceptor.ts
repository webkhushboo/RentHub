import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationsService } from '../services/notifications.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private notificationService: NotificationsService,
  ) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.notificationService.showError('User is unauthorized!!', '');
        } else if (err.status === 0) {
          this.notificationService.showError(JSON.stringify(err), '');
        } else {
          this.notificationService.showError(err?.error?.errorMessage, '');
        }
        return throwError(err);
      }));
  }
}
