import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MonitorDeIntegracao } from '../interfaces/monitor-de-integracao';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MonitorDeIntegracaoService {

  constructor(private http: HttpClient) { }

  get(): Observable<MonitorDeIntegracao[]> {
    const url = `${environment.serviceApi}integracao/monitor-de-integracao`;
    return this.http.get<MonitorDeIntegracao[]>(url);
  }
}
