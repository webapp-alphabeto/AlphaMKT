import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment, NO_MESSAGE } from "src/environments/environment";
import { SalesProduct } from "../interfaces/SalesProducts";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  get(
    reference: string,
    bagHeadId: number,
  ): Observable<SalesProduct> {
    const url = `${environment.serviceApi}sales-product`;
    let params = new HttpParams()
      .append("reference", reference)
      .append("bagHeadId", bagHeadId.toString());

    return this.http.get<SalesProduct>(url, { params, headers: NO_MESSAGE });
  }
}
