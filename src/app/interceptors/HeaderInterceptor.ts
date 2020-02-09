import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';


/** Pass untouched request through to the next request handler. */
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      const agent = window.navigator.userAgent.toLowerCase();
      console.log(agent);
      const authReq = req.clone({
        headers: req.headers.set('x-user-browser', 'Chrome ')
                            .set('x-user-os', 'Linux')
      });
      return next.handle(authReq);
  }
}
