import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  private tokens: { jwt: string } | null = null;

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenString = sessionStorage.getItem('token');

    if (tokenString) {
      try {
        this.tokens = JSON.parse(tokenString) as { jwt: string };

        const cloned = req.clone({
          setHeaders: {
            Authorization: `Bearer ${this.tokens.jwt}`,
          },
        });

        return next.handle(cloned);
      } catch (error) {
        console.error('Failed to parse token:', error);
      }
    }

    return next.handle(req);
  }
}
