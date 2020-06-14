import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { LoginService } from "src/app/core/services/login.service";
import {
  PoPageLoginAuthenticationType,
  PoPageLoginRecovery,
  PoModalPasswordRecoveryType,
  PoPageLoginLiterals,
  PoPageLogin,
} from "@po-ui/ng-templates";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  customLiterals: PoPageLoginLiterals = {
    loginErrorPattern: "Login obrigatório",
    loginHint: "Caso não possua usuário entre em contato com o suporte",
    titlePopover: "Opa!",
  };

  constructor(
    private authService: AuthService,
    private loginService: LoginService
  ) {}

  ngOnInit() {}

  authenticationType = PoPageLoginAuthenticationType.Bearer;

  passwordRecovery: PoPageLoginRecovery = {
    url: `${environment.serviceApi}login/recuperar-senha`,
    type: PoModalPasswordRecoveryType.Email,
    contactMail: "flaviomedeiros@alphabeto.com",
  };

  loginLoad = false;

  Login(login: PoPageLogin) {
    this.loginLoad = true;
    this.loginService.login(login).subscribe(
      (response: { token: string }) => {
        this.authService.login(response.token);
      },
      () => {
        this.loginLoad = false;
      },
      () => {
        this.loginLoad = false;
      }
    );
  }
}
