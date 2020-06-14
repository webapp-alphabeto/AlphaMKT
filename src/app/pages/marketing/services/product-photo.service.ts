import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment, SCREEN_LOCK_NO_MESSAGE, SCREEN_LOCK } from 'src/environments/environment';
import { IProductPhotoFilter } from '../interfaces/iproduct-photo-filter';
import { IProductView } from '../interfaces/iproduct-view';
import { IProductImage } from 'src/app/shared/models/IProductoImage';
import { IProductWithPhoto } from 'src/app/shared/models/IProductWithPhoto';

@Injectable({
  providedIn: 'root'
})
export class ProductPhotoService {

  constructor(private http: HttpClient) { }

  get(filter: IProductPhotoFilter): Observable<IProductView[]> {
    const url = `${environment.serviceApi}foto-produto`;
    return this.http.post<IProductView[]>(url, filter, { headers: SCREEN_LOCK_NO_MESSAGE });
  }

  getByReference(reference: string): Observable<IProductImage[]> {
    const url = `${environment.serviceApi}foto-produto/${reference}`;
    return this.http.get<IProductImage[]>(url, { headers: SCREEN_LOCK });
  }

  updateByReference(productPhotos: IProductImage[]): Observable<any> {
    const url = `${environment.serviceApi}foto-produto`;
    return this.http.put<IProductImage[]>(url, productPhotos, { headers: SCREEN_LOCK });
  }

  deleteById(id:number): Observable<IProductImage> {
    const url = `${environment.serviceApi}foto-produto/${id}`;
    return this.http.delete<IProductImage>(url);
  }

}