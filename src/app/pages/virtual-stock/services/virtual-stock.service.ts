import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { VirtualStockGroupView } from "../interfaces/VirtualStockGroupView";
import {
  SCREEN_LOCK,
  environment,
} from "src/environments/environment";
import { VirtualStockEdit } from "../interfaces/VirtualStockEdit";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class VirtualStockService {
  constructor(private http: HttpClient) {}

  get(opportunityId: number): Observable<VirtualStockGroupView[]> {
    const url = `${environment.serviceApi}virtual-stock/${opportunityId}`;
    return this.http.get<VirtualStockGroupView[]>(url, {
      headers: SCREEN_LOCK,
    });
  }

  download(opportunityId: number): Observable<ArrayBuffer> {
    const url = `${environment.serviceApi}virtual-stock/download/${opportunityId}`;
    return this.http
      .get(url, {
        headers: SCREEN_LOCK,
        responseType: "arraybuffer",
        observe: "body",
      })
      .pipe(
        map((file: ArrayBuffer) => {
          return file;
        })
      );
  }

  post(virtualStock: VirtualStockEdit): Observable<any> {
    const url = `${environment.serviceApi}virtual-stock`;
    return this.http.post<any>(url, virtualStock);
  }
}
