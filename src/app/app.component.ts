import { Component } from "@angular/core";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from "@angular/router";

import { AuthService } from "./core/services/auth.service";
import { ToolBarService } from "./shared/services/tool-bar.service";
import { ProfileService } from "./shared/services/profile.service";
import { TokenService } from "./core/services/token.service";
import { MenuService } from "./shared/services/menu.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public exibirAnimacaoDeRota = false;

  constructor(
    private router: Router,
    public auth: AuthService,
    public profileService: ProfileService,
    public tokenService: TokenService,
    public toolBarService: ToolBarService,
    public menuService: MenuService
  ) {
    router.events.subscribe((event: any) => {
      menuService.checkShowMenu(router);

      this.checkShowAnimacaoDeRota(event);
    });
  }

  private checkShowAnimacaoDeRota(event: any) {
    if (event instanceof NavigationStart) {
      this.exibirAnimacaoDeRota = true;
    }
    if (
      event instanceof NavigationEnd ||
      event instanceof NavigationCancel ||
      event instanceof NavigationError
    ) {
      this.exibirAnimacaoDeRota = false;
    }
  }

  ngOnInit(): void {
    this.verificarSeUsuarioJaEstaAutenticado();
  }

  private verificarSeUsuarioJaEstaAutenticado() {
    this.auth.Authenticated$().subscribe((autenticado: boolean) => {
      if (!autenticado) {
        this.router.navigateByUrl("/login");
      }
    });
  }
}
