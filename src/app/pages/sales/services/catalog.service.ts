import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CatalogOpportunity } from "../interfaces/CatalogOpportunity";
import { CatalogProduct } from "../interfaces/CatalogProduct";
import { ParamsFilter } from "../interfaces/ParamsFilter";

@Injectable({
  providedIn: "root",
})
export class CatalogService {
  constructor(private http: HttpClient) {}

  getOpportunitys(
    representativeId: number,
    clientId: number
  ): Observable<Array<CatalogOpportunity>> {
    const url = `${environment.serviceApi}catalog/sales-opportunity`;
    let params = new HttpParams()
      .append("representativeId", representativeId.toString())
      .append("clientId", clientId.toString());
    return this.http.get<Array<CatalogOpportunity>>(url, { params });
  }

  getProducts(paramsFilter: ParamsFilter): Observable<Array<CatalogProduct>> {
    const url = `${environment.serviceApi}catalog/products`;
    let params = new HttpParams()
      .append("opportunityId", paramsFilter.opportunityId.toString())
      .append("collection", paramsFilter.collection)
      .append("map", paramsFilter.map)
      .append("category", paramsFilter.category);
    return this.http.get<Array<CatalogProduct>>(url, { params });
  }
}
