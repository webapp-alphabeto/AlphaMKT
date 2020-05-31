import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/pages/home/services/usuario.service';
import { PoPageChangePassword } from '@po-ui/ng-templates';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  alterarSenha(evento: PoPageChangePassword) {
    this.usuarioService
      .alterarSenha(this.tokenService.DadosDoUsuario.id, evento)
      .subscribe(() => { });
  }

}
