import { Injectable } from "@angular/core";
import { PoToolbarProfile } from "@po-ui/ng-components";
import { PROFILE_STORAGE } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  get profile(): PoToolbarProfile {
    return JSON.parse(localStorage.getItem(PROFILE_STORAGE));
  }

  set profile(profile: PoToolbarProfile) {
    localStorage.setItem(PROFILE_STORAGE, JSON.stringify(profile));
  }
}
