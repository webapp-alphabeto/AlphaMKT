import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PoPageChangePassword } from '@po-ui/ng-templates';
import { UserIdService } from 'src/app/services/user-id.service';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {

  constructor(
    private userIdService: UserIdService,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  alterarSenha(evento: PoPageChangePassword) {
    this.usuarioService
      .alterarSenha(this.userIdService.Id, evento)
      .subscribe(() => { });
  }

}
