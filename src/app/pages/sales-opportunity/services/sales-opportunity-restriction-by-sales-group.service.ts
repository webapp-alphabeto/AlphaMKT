import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { RestrictionBySalesGroupView } from '../interfaces/RestrictionBySalesGroupView';
import { SalesOpportunityRestrictionBySalesGroup } from 'src/app/shared/models/SalesOpportunityRestrictionBySalesGroup';

@Injectable({
  providedIn: "root",
})
export class SalesOpportunityRestrictionBySalesGroupService {
  constructor(private http: HttpClient) {}

  getByOpportunityId(
    opportunityId: number
  ): Observable<RestrictionBySalesGroupView[]> {
    const url = `${environment.serviceApi}sales-opportunity-restriction-by-sales-group/${opportunityId}`;
    return this.http.get<RestrictionBySalesGroupView[]>(url);
  }

  post(
    salesGroup: SalesOpportunityRestrictionBySalesGroup
  ): Observable<SalesOpportunityRestrictionBySalesGroup> {
    const url = `${environment.serviceApi}sales-opportunity-restriction-by-sales-group`;
    return this.http.post<SalesOpportunityRestrictionBySalesGroup>(url, salesGroup);
  }

  delete(id: number): Observable<SalesOpportunityRestrictionBySalesGroup> {
    const url = `${environment.serviceApi}sales-opportunity-restriction-by-sales-group/${id}`;
    return this.http.delete<SalesOpportunityRestrictionBySalesGroup>(url);
  }
}
