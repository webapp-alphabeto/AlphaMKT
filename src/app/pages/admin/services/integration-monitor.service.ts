import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IntegrationMonitor } from '../interfaces/integration-monitor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IntegrationMonitorService {

  constructor(private http: HttpClient) { }

  get(): Observable<IntegrationMonitor[]> {
    const url = `${environment.serviceApi}integracao/monitor-de-integracao`;
    return this.http.get<IntegrationMonitor[]>(url);
  }
}
