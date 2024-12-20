import { Component, OnInit } from "@angular/core";
import { CatalogService } from "../services/catalog.service";
import { CheckInService } from "src/app/shared/services/check-in.service";
import { TokenService } from "src/app/core/services/token.service";
import { slideIn } from 'src/app/shared/animations/animations';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: "app-sales",
  templateUrl: "./sales.component.html",
  styleUrls: ["./sales.component.css"],
  animations:[slideIn]
})
export class SalesComponent implements OnInit {
  constructor(
    public catalogServices: CatalogService,
    private tokenServices: TokenService,
    private checkinServices: CheckInService,
    menuService: MenuService
  ) {
    menuService.ocultarMenu();
  }

  ngOnInit(): void {
    this.getOpportunitys();
  }

  getOpportunitys() {
    this.catalogServices
      .getOpportunitys(
        this.tokenServices.Claims.representativeId,
        this.checkinServices.checkin.clientId
      )
      .subscribe((x) => {
        this.catalogServices.setOpportunitys(x);
        this.catalogServices.setOpportunityActive(x[0]);
      });
  }
}
