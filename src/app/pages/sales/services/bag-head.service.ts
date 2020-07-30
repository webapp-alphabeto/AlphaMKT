import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { BagHead } from "src/app/shared/models/BagHead";

@Injectable({
  providedIn: "root",
})
export class BagHeadService {
  constructor(private http: HttpClient) {}

  get(opportunityId: number, clientId: number): Observable<BagHead> {
    const url = `${environment.serviceApi}bag`;
    let params = new HttpParams()
      .append("opportunityId", opportunityId.toString())
      .append("clientId", clientId.toString());
    return this.http.get<BagHead>(url, { params });
  }

  post(bagHead: BagHead) {
    const url = `${environment.serviceApi}bag`;
    return this.http.post<BagHead>(url, bagHead);
  }
  put(bagHead: BagHead, id:number) {
    const url = `${environment.serviceApi}bag/${id}`;
    return this.http.put<BagHead>(url, bagHead);
  }
}
