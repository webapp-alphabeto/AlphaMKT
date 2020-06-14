import { Injectable } from "@angular/core";
import { TOKEN_STORAGE } from "src/environments/environment";
import * as jwt_decode from "jwt-decode";
import { IClaims } from "../interfaces/iclaims";
import { ProfileService } from "src/app/shared/services/profile.service";
import { PoToolbarProfile } from "@po-ui/ng-components";

@Injectable({
  providedIn: "root",
})
export class TokenService {
  constructor(private profileService: ProfileService) {}

  get token() {
    return localStorage.getItem(TOKEN_STORAGE);
  }

  set token(token: string) {
    localStorage.setItem(TOKEN_STORAGE, token);
    this.claimsToProfile();
  }

  private claimsToProfile() {
    const claims = this.Claims;

    const profile = {
      title: claims.name,
      avatar: claims.photo,
      subtitle: claims.email,
    } as PoToolbarProfile;

    this.profileService.profile = profile;
  }

  get Claims(): IClaims {
    try {
      let decode = jwt_decode(this.token);
      decode.id = parseInt(decode.id);
      decode.representativeId = parseInt(decode.representativeId);
      decode.accessLevel = parseInt(decode.accessLevel);
      return decode;
    } catch (error) {
      return null;
    }
  }

  resetToken() {
    localStorage.removeItem(TOKEN_STORAGE);
  }
}
