import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PriceListByMkup } from "src/app/shared/models/PriceListByMkup";
import { Observable } from "rxjs";
import { environment, SCREEN_LOCK } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class PriceListService {
  constructor(private http: HttpClient) {}

  get(opportunityId: number): Observable<PriceListByMkup[]> {
    const url = `${environment.serviceApi}price-list-by-mkup/${opportunityId}`;
    return this.http.get<PriceListByMkup[]>(url, { headers: SCREEN_LOCK });
  }

  post(mkup: PriceListByMkup): Observable<PriceListByMkup> {
    const url = `${environment.serviceApi}price-list-by-mkup`;
    return this.http.post<PriceListByMkup>(url, mkup);
  }

  put(mkup: PriceListByMkup): Observable<PriceListByMkup> {
    const url = `${environment.serviceApi}price-list-by-mkup`;
    return this.http.put<PriceListByMkup>(url, mkup);
  }

  delete(id: number): Observable<PriceListByMkup> {
    const url = `${environment.serviceApi}price-list-by-mkup/${id}`;
    return this.http.delete<PriceListByMkup>(url);
  }
}
