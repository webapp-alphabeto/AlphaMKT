import { Component, OnInit } from "@angular/core";
import {
  PoBreadcrumb,
  PoPageAction,
  PoNotificationService,
  PoToolbarProfile,
} from "@po-ui/ng-components";
import { ProfileService } from "src/app/shared/services/profile.service";
import { environment } from "src/environments/environment";
import { UsuarioService } from "src/app/pages/home/services/usuario.service";
import { IUsuario } from "src/app/pages/home/interfaces/iusuario";
import { HttpResponse } from "@angular/common/http";
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: "app-meu-perfil",
  templateUrl: "./meu-perfil.component.html",
  styleUrls: ["./meu-perfil.component.css"],
})
export class MeuPerfilComponent implements OnInit {
  public uploadApi = `${environment.serviceApi}foto-usuario`;

  usuario = {} as IUsuario;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: "Home", link: "/" }, { label: "Meu Perfil" }],
  };

  public readonly actions: Array<PoPageAction> = [
    { label: "Alterar minha senha", url: "home/alterar-senha" },
    { label: "Salvar", action: () => this.salvarAlteracoes() },
  ];

  constructor(
    public profileService: ProfileService,
    private tokenService: TokenService,
    private usuarioService: UsuarioService,
    private notification: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.ObterUsuario();
  }

  private ObterUsuario() {
    this.usuarioService
      .getById(this.tokenService.Claims.id)
      .subscribe((x: IUsuario) => {
        this.usuario = x;
      });
  }

  salvarAlteracoes() {
    this.usuarioService.update(this.usuario).subscribe((x: IUsuario) => {
      const profile = {
        title: x.nome,
        subtitle: x.email,
        avatar: this.profileService.profile.avatar,
      } as PoToolbarProfile;
      this.profileService.profile = profile;
      this.notification.success("Alterações salvas.");
    });
  }

  incluirImagemDoPerfil(evento: any) {
    evento.data.id = this.tokenService.Claims.id;
  }

  obterPerfil(evento: HttpResponse<PoToolbarProfile>) {
    this.profileService.profile = evento.body;
  }

  obterErro(evento: any) {
    this.notification.error(evento);
  }
}
