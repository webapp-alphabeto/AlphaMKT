import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { StorePicturesView } from "src/app/pages/representative/interfaces/StorePicturesView";

@Injectable({
  providedIn: "root",
})
export class StorePictureService {
  constructor(private http: HttpClient) {}

  get(clientId: number): Observable<StorePicturesView[]> {
    const url = `${environment.serviceApi}shared/store-picture/${clientId}`;
    return this.http.get<StorePicturesView[]>(url);
  }

  delete(id: number): Observable<any> {
    const url = `${environment.serviceApi}shared/store-picture/${id}`;
    return this.http.delete<any>(url);
  }
}
