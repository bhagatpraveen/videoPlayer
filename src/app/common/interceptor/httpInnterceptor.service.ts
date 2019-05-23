import { Injectable } from '@angular/core';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class HttpInterceptorClass implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers: HttpHeaders = new HttpHeaders();
        const authReq = req.clone({
            headers: req.headers.set('Source', 'Web')
        });
       // console.log('Intercepted HTTP call', authReq);
        return next.handle(authReq);
    }
}