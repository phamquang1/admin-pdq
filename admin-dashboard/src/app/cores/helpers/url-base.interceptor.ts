import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrlService } from 'src/app/services/base-url.service';

@Injectable()
export class UrlBaseInterceptor implements HttpInterceptor {

  constructor(
    private baseUrlService: BaseUrlService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const baseUrl = this.baseUrlService.getUrl;
    if(baseUrl){
      request = request.clone({
        url : baseUrl + request.url
      })
    }
    return next.handle(request);
  }
}
