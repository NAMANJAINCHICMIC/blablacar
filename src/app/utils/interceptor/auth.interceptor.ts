import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // console.log('interceptor');
    const token = localStorage.getItem('token');
    if (token) {
      req = req.clone({
        headers: req.headers.set('Authorization', `bearer ${token}`),
      });
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          Swal.fire(
            `Error ${error.status}`,
            error.error.msg,
            'error'
            )
          return throwError(error);
        })
      );
    } 
    else {
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          Swal.fire(
            `Error ${error.status}`,
            error.error.msg,
            'error'
            )

          return throwError(error);
        })
      );
    }
  }
}
