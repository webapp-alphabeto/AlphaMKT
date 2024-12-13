import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { Banner } from "src/app/shared/models/Banner";
import { BannerType } from "src/app/shared/enums/BannerType";
import { PoUploadFileRestrictions } from "@po-ui/ng-components";
import { BannerService } from "../services/banner.service";
import { BannerView } from "../interfaces/BannerView";
import { VitrinevivaService } from "../services/vitrineviva.service";
import { PoButtonModule } from '@po-ui/ng-components';

@Component({
  selector: "app-banners",
  templateUrl: "./vitrineviva.component.html",
  styleUrls: ["./vitrineviva.component.css"],
})
export class VitrinevivaComponent implements OnInit {
  salesOpportunityId: number;
  serviceApiSalesOpportunity = `${environment.serviceApi}sales-opportunity/po-combo`;
  serviceApiBannerUpload = `${environment.serviceApi}banner/upload`;

  banners: Array<BannerView>;
  banner = {
    bannerType: BannerType.Desktop,
  } as Banner;

  restrictions: PoUploadFileRestrictions = {
    maxFileSize: 1000000,
  };


  constructor(private vitrinevivaService: VitrinevivaService) {}

  ngOnInit(): void {}


}
