import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { SalesOpportunity } from "src/app/shared/models/SalesOpportunity";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { FilterDateOnlyActive } from "../interfaces/FilterDateOnlyActive";
import * as moment from "moment";

@Injectable({
  providedIn: "root",
})
export class SalesOpportunityService {
  constructor(private http: HttpClient) {}

  get(filter: FilterDateOnlyActive): Observable<SalesOpportunity[]> {
    const url = `${environment.serviceApi}sales-opportunity`;

    let params = new HttpParams()
      .append("start", moment(filter.start).format("YYYY-MM-DD"))
      .append("end", moment(filter.end).format("YYYY-MM-DD"))
      .append("onlyActive", filter.onlyActive.toString());

    return this.http.get<SalesOpportunity[]>(url, { params });
  }

  getById(id: number): Observable<SalesOpportunity> {
    const url = `${environment.serviceApi}sales-opportunity/${id}`;
    return this.http.get<SalesOpportunity>(url);
  }

  post(salesOpportunity: SalesOpportunity): Observable<SalesOpportunity> {
    const url = `${environment.serviceApi}sales-opportunity`;
    return this.http.post<SalesOpportunity>(url, salesOpportunity);
  }

  put(salesOpportunity: SalesOpportunity): Observable<SalesOpportunity> {
    const url = `${environment.serviceApi}sales-opportunity`;
    return this.http.put<SalesOpportunity>(url, salesOpportunity);
  }

  deleteById(id: number): Observable<SalesOpportunity> {
    const url = `${environment.serviceApi}sales-opportunity/${id}`;
    return this.http.delete<SalesOpportunity>(url);
  }

  mapSalesOpportunity(reponse: SalesOpportunity): SalesOpportunity {
    const salesOpportunity = reponse;
    salesOpportunity.start = new Date(reponse.start);
    salesOpportunity.end = new Date(reponse.end);
    return salesOpportunity;
  }
}
