import { Injectable } from '@angular/core';
import { USERID_STORAGE } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserIdService {

  get Id() {
    return parseInt(localStorage.getItem(USERID_STORAGE));
  }

  set Id(userid: number) {
    localStorage.setItem(USERID_STORAGE, userid.toString());
  }

  resetarId() {
    localStorage.removeItem(USERID_STORAGE);
  }
}
