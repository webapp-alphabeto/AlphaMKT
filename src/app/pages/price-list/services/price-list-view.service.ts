import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment, SCREEN_LOCK } from "src/environments/environment";
import { PriceListProductPreview } from '../interfaces/PriceListProductPreview';

@Injectable({
  providedIn: "root",
})
export class PriceListViewService {
  constructor(private http: HttpClient) {}

  get(opportunityId: number): Observable<PriceListProductPreview[]> {
    const url = `${environment.serviceApi}price-list-product-view/${opportunityId}`;
    return this.http.get<PriceListProductPreview[]>(url, { headers: SCREEN_LOCK });
  }

}
