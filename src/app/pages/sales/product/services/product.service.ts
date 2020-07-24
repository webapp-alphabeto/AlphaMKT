import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { SalesProduct } from "../interfaces/SalesProducts";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  get(
    reference: string,
    opportunityId: number,
    priceListId: number
  ): Observable<SalesProduct> {
    const url = `${environment.serviceApi}sales-product`;
    let params = new HttpParams()
      .append("reference", reference)
      .append("opportunityId", opportunityId.toString())
      .append("priceListId", priceListId.toString());
    return this.http.get<SalesProduct>(url, { params });
  }
}
