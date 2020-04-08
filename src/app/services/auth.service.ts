import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Autenticado = new BehaviorSubject<boolean>(this.hasToken());
  
  private hasToken(): boolean {
    // return !!this.token.token;
    return true;
  }

  Autenticado$(): Observable<boolean> {
    return this.Autenticado.asObservable();
  }

  logout(){
    console.log('teste');
  }
}
