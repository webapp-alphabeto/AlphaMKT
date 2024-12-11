import { Injectable } from "@angular/core";
import { TOKEN_STORAGE } from "src/environments/environment";
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
      const decode = this.decodeJwt(this.token);
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

  /**
   * Decodes a JWT token without using external libraries.
   * @param token The JWT token to decode.
   * @returns The decoded payload as an object.
   */
  private decodeJwt(token: string): any {
    if (!token) {
      throw new Error("Token is not provided");
    }

    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
        .join("")
    );
    return JSON.parse(jsonPayload);
  }
}
