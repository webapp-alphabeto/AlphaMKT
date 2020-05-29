import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoPageAction, PoToolbarProfile, PoNotificationService } from '@po-ui/ng-components';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { UserIdService } from 'src/app/shared/services/user-id.service';
import { environment } from 'src/environments/environment';
import { UsuarioService } from 'src/app/pages/home/services/usuario.service';
import { IUsuario } from 'src/app/pages/home/interfaces/iusuario';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {

  public uploadApi = `${environment.serviceApi}foto-usuario`

  usuario = {} as IUsuario;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Meu Perfil' }
    ]
  };

  public readonly actions: Array<PoPageAction> = [
    { label: 'Alterar minha senha', url: 'home/alterar-senha' },
    { label: 'Salvar', action: () => this.salvarAlteracoes() }
  ];

  constructor(
    public profileService: ProfileService,
    private useridService: UserIdService,
    private usuarioService: UsuarioService,
    private notification: PoNotificationService) { }

  ngOnInit(): void {
    this.ObterUsuario();
  }


  private ObterUsuario() {
    this.usuarioService
      .getById(this.useridService.Id)
      .subscribe((x: IUsuario) => { this.usuario = x; });
  }

  salvarAlteracoes() {
    this.usuarioService
      .update(this.usuario)
      .subscribe(
        (x: IUsuario) => { this.notification.success('Alterações salvas.'); });
  }

  incluirImagemDoPerfil(evento: any) {
    evento.data.id = this.useridService.Id;
  }

  obterPerfil(evento: any) {
    const profile: PoToolbarProfile = evento.body;
    this.profileService.profile = profile;
  }

  obterErro(evento) {
    this.notification.error(evento)
  }

}
