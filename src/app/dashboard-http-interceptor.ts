import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class DashboardHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        throw new Error('Method not implemented.');
        const authToken = 'your-auth-token';
        const authRequest = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`),
        });
        return next.handle(authRequest);
    }
}
