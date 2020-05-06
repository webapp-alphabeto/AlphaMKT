import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';
import { PoPageLoginAuthenticationType, PoPageLoginRecovery, PoModalPasswordRecoveryType, PoPageLoginLiterals } from '@po-ui/ng-templates';
import { environment } from 'src/environments/environment';
import { ILogin } from 'src/app/interfaces/ilogin';
import { ILoginResponse } from 'src/app/interfaces/ilogin-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customLiterals: PoPageLoginLiterals = {
    
    loginErrorPattern: 'Login obrigatório',
    loginHint: 'Caso não possua usuário entre em contato com o suporte',    
    titlePopover: 'Opa!',    
  };

  constructor(
    private authService: AuthService,
    private loginService: LoginService) { }

  ngOnInit() {
  }

  authenticationType = PoPageLoginAuthenticationType.Bearer;

  passwordRecovery: PoPageLoginRecovery = {
    url: `${environment.serviceApi}login/recuperar-senha`,
    type: PoModalPasswordRecoveryType.Email,
    contactMail: 'flaviomedeiros@alphabeto.com'
  };

  loginLoad = false;

  Login(login: ILogin) {

    this.loginLoad = true;
    this.loginService.logar(login).subscribe(
      (response: ILoginResponse) => {
        this.authService.login(response);
      },
      () => { this.loginLoad = false; },
      () => {  this.loginLoad = false; }
    );

  }

}
