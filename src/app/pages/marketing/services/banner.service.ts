import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {
  environment,
  SCREEN_LOCK_NO_MESSAGE,
  SCREEN_LOCK,
} from "src/environments/environment";
import { IProductPhotoFilter } from "../interfaces/iproduct-photo-filter";
import { IProductView } from "../interfaces/iproduct-view";
import { IProductImage } from "src/app/shared/models/IProductoImage";
import { BannerView } from "../interfaces/BannerView";

@Injectable({
  providedIn: "root",
})
export class BannerService {
  constructor(private http: HttpClient) {}

  get(opportunityId: number): Observable<BannerView[]> {
    const url = `${environment.serviceApi}banner/${opportunityId}`;
    return this.http.get<BannerView[]>(url, { headers: SCREEN_LOCK });
  }


  deleteById(id: number): Observable<any> {
    const url = `${environment.serviceApi}banner/${id}`;
    return this.http.delete<any>(url);
  }
}
