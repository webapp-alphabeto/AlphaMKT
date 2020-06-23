import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { RestrictionByRepresentativeView } from '../interfaces/RestrictionByRepresentativeView';
import { SalesOpportunityRestrictionByRepresentative } from 'src/app/shared/models/SalesOpportunityRestrictionByRepresentative';

@Injectable({
  providedIn: "root",
})
export class SalesOpportunityRestrictionByRepresentativeService {
  constructor(private http: HttpClient) {}

  getByOpportunityId(
    opportunityId: number
  ): Observable<RestrictionByRepresentativeView[]> {
    const url = `${environment.serviceApi}sales-opportunity-restriction-by-representative/${opportunityId}`;
    return this.http.get<RestrictionByRepresentativeView[]>(url);
  }

  post(
    representative: SalesOpportunityRestrictionByRepresentative
  ): Observable<SalesOpportunityRestrictionByRepresentative> {
    const url = `${environment.serviceApi}sales-opportunity-restriction-by-representative`;
    return this.http.post<SalesOpportunityRestrictionByRepresentative>(url, representative);
  }

  delete(id: number): Observable<SalesOpportunityRestrictionByRepresentative> {
    const url = `${environment.serviceApi}sales-opportunity-restriction-by-representative/${id}`;
    return this.http.delete<SalesOpportunityRestrictionByRepresentative>(url);
  }
}
