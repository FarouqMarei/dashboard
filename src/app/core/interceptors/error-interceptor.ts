import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        switch(error.status) {
            case 404:
            {
                //not found
            }
            break;
            case 200:
            {
                //success
            }
            break;
            case 500:
            {
                //server error
            }
            break;
        }
        // Handle and log the error here
        console.error('HTTP Error:', error);
        // Optionally rethrow the error to propagate it
        return throwError(error);
      })
    );
  }
}