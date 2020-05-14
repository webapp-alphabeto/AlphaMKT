import { Component, OnInit } from '@angular/core';
import { PoMenuItem, PoToolbarAction } from '@po-ui/ng-components';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserTypeService } from 'src/app/services/user-type.service';
import { NivelDeAcesso } from 'src/app/autenticacao/nivel-de-acesso.enum';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(
    private typeUser: UserTypeService,
    private router: Router) { }

  ngOnInit() {
  }

  irPara(): void {
    
    if (this.typeUser.nivelDeAcesso == NivelDeAcesso.Administracao)
      this.router.navigateByUrl('/administracao');

    if (this.typeUser.nivelDeAcesso == NivelDeAcesso.Marketing)
      this.router.navigateByUrl('/marketing');

  }


}
