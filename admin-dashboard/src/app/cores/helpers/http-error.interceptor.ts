// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor, HttpErrorResponse
// } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable()
// export class HttpErrorInterceptor implements HttpInterceptor {

//   constructor() {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(request)
//     .pipe(
//       catchError((err: HttpErrorResponse) => {
//         if(err.status === 401){
//           console.log("Your session is expired")
//           setTimeout(() => { window.location.href = '/account/login' }, 3000);
//             return;
//         }
//         const error = err.error;
//         let errMsg = '';
//         if(error instanceof ErrorEvent ){
//           errMsg = `Eroor : ${error.message}`
//         } else {
//           errMsg = error ? `${error.message || err.message}` : err.message;
//         }
//         return throwError(errMsg);
//       })
//     )
//   }
// }
  