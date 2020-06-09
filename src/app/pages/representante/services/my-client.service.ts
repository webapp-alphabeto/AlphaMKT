import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment, SCREEN_LOCK } from "src/environments/environment";
import { IMyClientEdit } from '../interfaces/imy-client';

@Injectable({
  providedIn: "root", 
})
export class MyClientService {
  constructor(private httpClient: HttpClient) {}
  getById(id: number): Observable<IMyClientEdit> {
    const url = `${environment.serviceApi}/representative-area/my-client/client/${id}`;
    return this.httpClient.get(url, { headers: SCREEN_LOCK });
  }
}
