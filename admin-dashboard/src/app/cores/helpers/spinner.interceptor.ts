import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {finalize, tap} from 'rxjs/operators'
import { SpinnerService } from 'src/app/services/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(
    private spinner: SpinnerService,
  ) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinner.showSpinner();
    console.log('pending');
    return next.handle(request).pipe(
      // finalize(() => { this.spinner.hideSpinner() ; })
      tap((event: HttpEvent<any>) => {
        if (!(event instanceof HttpResponse)) {
          console.log('complete', event);
          return;
        }
        this.spinner.hideSpinner() ;
      }, (error) => {
        console.log('erre');
        this.spinner.hideSpinner() ;
      })
    );
  }
}
