import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { TokenService } from "src/app/core/services/token.service";
import {
  PoLookupColumn,
  PoLookupComponent,
  PoBreadcrumb,
  PoBreadcrumbItem,
} from "@po-ui/ng-components";
import { CheckInService } from "src/app/shared/services/check-in.service";
import { CheckIn } from "src/app/shared/interfaces/check-in.interface";
import { Router } from "@angular/router";
import { ToolBarService } from "src/app/shared/services/tool-bar.service";
import { MenuService } from "src/app/shared/services/menu.service";

@Component({
  selector: "app-check-in",
  templateUrl: "./check-in.component.html",
  styleUrls: ["./check-in.component.css"],
})
export class CheckInComponent implements OnInit {
  serviceApiClient = `${environment.serviceApi}representative-area/my-client/${this.tokenService.Claims.representativeId}`;
  client: CheckIn;
  clientId: number;

  clientColumns: Array<PoLookupColumn> = [
    { property: "id", label: "Código" },
    { property: "fantasyName", label: "Nome" },
  ];

  breadcrumb: PoBreadcrumb = {
    items: [
      {
        label: "Home",
        link: "/representante/home",
      },
      {
        label: "Check-in",
      },
    ],
  };

  constructor(
    private tokenService: TokenService,
    private checkinService: CheckInService,
    private router: Router,
    toolbarService: ToolBarService
  ) {
    toolbarService.exibir();
  }

  ngOnInit(): void {
    if (this.checkinService.checkin)
      this.clientId = this.checkinService.checkin.clientId;
  }

  iniciar(x: any) {
    this.checkinService.checkin = {
      clientName: x.oldValue,
      clientId: x.valueToModel,
      representativeId: this.tokenService.Claims.representativeId,
    };
    this.router.navigateByUrl("sales");
  }
}
