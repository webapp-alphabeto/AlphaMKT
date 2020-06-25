import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { Banner } from "src/app/shared/models/Banner";
import { BannerType } from "src/app/shared/enums/BannerType";
import { PoUploadFileRestrictions } from "@po-ui/ng-components";
import { BannerService } from "../services/banner.service";
import { BannerView } from "../interfaces/BannerView";

@Component({
  selector: "app-banners",
  templateUrl: "./banners.component.html",
  styleUrls: ["./banners.component.css"],
})
export class BannersComponent implements OnInit {
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

  constructor(private bannerService: BannerService) {}

  ngOnInit(): void {}

  includePropertiesInTheRequest(evento: any) {
    this.banner.salesOpportunityId = this.salesOpportunityId;
    evento.data = this.banner;

  }

  uploadSuccess() {
    this.get();
  }

  get() {
    this.bannerService.get(this.salesOpportunityId).subscribe((x) => {
      this.banners = x;
    });
  }

  delete(banner: BannerView) {
    this.bannerService.deleteById(banner.id).subscribe(() => {
      this.get();
    });
  }
}
