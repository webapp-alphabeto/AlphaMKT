import { Component, OnInit } from "@angular/core";
import {
  PoBreadcrumb,
  PoPageAction,
  PoNotificationService,
  PoToolbarProfile,
} from "@po-ui/ng-components";
import { ProfileService } from "src/app/shared/services/profile.service";
import { environment } from "src/environments/environment";
import { UserService } from "src/app/pages/home/services/user.service";
import { IUser } from "src/app/shared/models/IUser";
import { HttpResponse } from "@angular/common/http";
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html",
  styleUrls: ["./my-profile.component.css"],
})
export class MyProfileComponent implements OnInit {
  public uploadApi = `${environment.serviceApi}foto-usuario`;

  user = {} as IUser;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: "Home", link: "/" }, { label: "Meu Perfil" }],
  };

  public readonly actions: Array<PoPageAction> = [
    { label: "Alterar minha senha", url: "home/alterar-senha" },
    { label: "Salvar", action: () => this.saveChanges() },
  ];

  constructor(
    public profileService: ProfileService,
    private tokenService: TokenService,
    private userService: UserService,
    private notification: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  private getUser() {
    this.userService
      .getById(this.tokenService.Claims.id)
      .subscribe((x: IUser) => {
        this.user = x;
      });
  }

  saveChanges() {
    this.userService.update(this.user).subscribe((x: IUser) => {
      const profile = {
        title: x.name,
        subtitle: x.email,
        avatar: this.profileService.profile.avatar,
      } as PoToolbarProfile;
      this.profileService.profile = profile;
      this.notification.success("Alterações salvas.");
    });
  }

  addProfilePicture(evento: any) {
    evento.data.id = this.tokenService.Claims.id;
  }

  getProfile(evento: HttpResponse<PoToolbarProfile>) {
    this.profileService.profile = evento.body;
  }

  getError(evento: any) {
    this.notification.error(evento);
  }
}
