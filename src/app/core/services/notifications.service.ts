import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {

  constructor(private toastr: ToastrService) { }

  public showSuccess(message: string, title: string) {
      this.toastr.success(message, title, {closeButton: true});
  }

  public showError(message:string, title: string) {
      this.toastr.error(message, title, {closeButton: true, positionClass: 'toast-top-left', timeOut: 60000});
  }

  public showInfo(message:string, title: string) {
      this.toastr.info(message, title, {closeButton: true});
  }

  public showWarning(message:string, title: string) {
      this.toastr.warning(message, title, {closeButton: true, positionClass: 'toast-top-center', timeOut: 60000});
  }
}
