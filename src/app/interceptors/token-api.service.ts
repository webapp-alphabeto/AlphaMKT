import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class TokenApiService {

  //FIXME: Atenção você está importando a interceptação em todos os módulos
  // tente importar somento no módulo do portinari

  constructor(
    private tokenService: TokenService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.tokenService.token) {
      return next.handle(this.addToken(req, this.tokenService.token));
    }
    return next.handle(req);
  }

  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ setHeaders: { Authorization: `bearer ${token}` } });
  }
}
