import { Injectable } from "@angular/core";
import { CHECK_IN } from "src/environments/environment";
import { CheckIn } from '../interfaces/check-in.interface';

@Injectable({
  providedIn: "root",
})
export class CheckInService {
  get checkin(): CheckIn {
    return JSON.parse(localStorage.getItem(CHECK_IN));
  }

  set checkin(checkin: CheckIn) {
    localStorage.setItem(CHECK_IN, JSON.stringify(checkin));
  }

  resetarCheckIn() {
    localStorage.removeItem(CHECK_IN);
  }
}
