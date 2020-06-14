import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/pages/home/services/user.service';
import { PoPageChangePassword } from '@po-ui/ng-templates';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  changePassword(evento: PoPageChangePassword) {
    this.userService
      .changePassword(this.tokenService.Claims.id, evento)
      .subscribe(() => { });
  }

}
