import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { SalesOpportunityRestrictionByClient } from "src/app/shared/models/SalesOpportunityRestrictionByClient";
import { RestrictionByClientView } from '../interfaces/RestrictionByClientView';

@Injectable({
  providedIn: "root",
})
export class SalesOpportunityRestrictionByClientService {
  constructor(private http: HttpClient) {}

  getByOpportunityId(
    opportunityId: number
  ): Observable<RestrictionByClientView[]> {
    const url = `${environment.serviceApi}sales-opportunity-restriction-by-client/${opportunityId}`;
    return this.http.get<RestrictionByClientView[]>(url);
  }

  post(
    client: SalesOpportunityRestrictionByClient
  ): Observable<SalesOpportunityRestrictionByClient> {
    const url = `${environment.serviceApi}sales-opportunity-restriction-by-client`;
    return this.http.post<SalesOpportunityRestrictionByClient>(url, client);
  }

  delete(id: number): Observable<SalesOpportunityRestrictionByClient> {
    const url = `${environment.serviceApi}sales-opportunity-restriction-by-client/${id}`;
    return this.http.delete<SalesOpportunityRestrictionByClient>(url);
  }
}
