import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { DeliveryDate } from "src/app/shared/models/DeliveryDate";
import { Observable } from "rxjs";
import { DeliveryDateView } from '../interfaces/DeliveryDateView';

@Injectable({
  providedIn: "root",
})
export class DeliveryDateService {
  constructor(private http: HttpClient) {}

  post(delivery: DeliveryDate): Observable<DeliveryDateView> {
    const url = `${environment.serviceApi}delivery-date`;
    return this.http.post<DeliveryDateView>(url, delivery);
  }

  put(id: number, date: string): Observable<DeliveryDate> {
    const url = `${environment.serviceApi}delivery-date/${id}/${date}`;
    return this.http.put<DeliveryDate>(url, {});
  }

  delete(id: number): Observable<DeliveryDate> {
    const url = `${environment.serviceApi}delivery-date/${id}`;
    return this.http.delete<DeliveryDate>(url);
  }
}
