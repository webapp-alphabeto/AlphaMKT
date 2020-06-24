import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { RestrictionByFilterProductView } from '../interfaces/RestrictionByFilterProductView';
import { SalesOpportunityRestrictionByFilterProducts } from 'src/app/shared/models/SalesOpportunityRestrictionByFilterProducts';

@Injectable({
  providedIn: "root",
})
export class SalesOpportunityRestrictionByFilterProductService {
  constructor(private http: HttpClient) {}

  getByOpportunityId(
    opportunityId: number
  ): Observable<RestrictionByFilterProductView[]> {
    const url = `${environment.serviceApi}sales-opportunity-restriction-by-filter-product/${opportunityId}`;
    return this.http.get<RestrictionByFilterProductView[]>(url);
  }

  post(
    filterProduct: SalesOpportunityRestrictionByFilterProducts
  ): Observable<SalesOpportunityRestrictionByFilterProducts> {
    const url = `${environment.serviceApi}sales-opportunity-restriction-by-filter-product`;
    return this.http.post<SalesOpportunityRestrictionByFilterProducts>(url, filterProduct);
  }

  delete(id: number): Observable<SalesOpportunityRestrictionByFilterProducts> {
    const url = `${environment.serviceApi}sales-opportunity-restriction-by-filter-product/${id}`;
    return this.http.delete<SalesOpportunityRestrictionByFilterProducts>(url);
  }
}
