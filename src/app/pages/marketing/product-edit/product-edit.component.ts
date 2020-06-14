import { Component, OnInit } from '@angular/core';
import { IComplementaryProductInformation } from 'src/app/shared/models/IComplementaryProductInformation';
import { ComplementaryProductInformationService } from 'src/app/pages/marketing/services/complementary-product-information.service';
import { ProductPhotoService } from 'src/app/pages/marketing/services/product-photo.service';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PoUploadFileRestrictions } from '@po-ui/ng-components';
import { IProductWithPhoto } from 'src/app/shared/models/IProductWithPhoto';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  uploadApi = `${environment.serviceApi}foto-produto/upload`;

  complementaryProductInformation = {} as IComplementaryProductInformation;
  productPhotos = [] as IProductWithPhoto[];
  restrictions: PoUploadFileRestrictions = {
    maxFileSize: 1000000
  };

  private insert = false;
  private reference: string;

  constructor(
    private complementaryProductInformationService: ComplementaryProductInformationService,
    private productPhotoService: ProductPhotoService) { }

  ngOnInit() {

  }

  runQueries(reference: string) {
    this.reference = reference;
    this.getComplementaryProductInformation(reference);
    this.getProductPhotos(reference);
  }

  private getComplementaryProductInformation(reference: string) {
    this.complementaryProductInformationService
      .getByReferencia(reference)
      .subscribe((x: IComplementaryProductInformation) => {
        if (x === null) {
          this.insert = true;
          this.complementaryProductInformation = {} as IComplementaryProductInformation;
          return;
        }

        this.insert = false;
        this.complementaryProductInformation = x;
      });
  }

  private getProductPhotos(referencia: string) {
    this.productPhotoService
      .getByReference(referencia)
      .subscribe((x: IProductWithPhoto[]) => { this.productPhotos = x });
  }

  updateImages(reference: string) {
    this.productPhotoService
      .updateByReference(this.productPhotos)
      .subscribe((x) => { this.getProductPhotos(reference); });
  }

  switchSiteCover(item: IProductWithPhoto) {
    this.productPhotos.forEach(x => {
      if (x.id !== item.id)
        x.webSiteCover = false;

    });

    this.updateImages(item.reference);
  }

  switchErpCover(item: IProductWithPhoto) {
    this.productPhotos.forEach(x => {
      if (x.id !== item.id)
        x.erpCover = false;

    });

    this.updateImages(item.reference);
  }

  deleteImage(item: IProductWithPhoto) {
    this.productPhotoService
      .deleteById(item.id)
      .subscribe((x) => { this.getProductPhotos(item.reference) });
  }

  uploadSuccess() {
    this.getProductPhotos(this.reference);
  }

  includeReferenceInTheRequest(evento: any) {
    evento.data.reference = this.reference;
  }

  updateComplementaryProductInformation() : Observable<any> {
    if (this.insert) {

      this.complementaryProductInformation.reference = this.reference;

     return this.complementaryProductInformationService
        .incluirInfoComplementarProduto(this.complementaryProductInformation);  
    }

   return this.complementaryProductInformationService
      .atualizarInfoComplementarProduto(this.complementaryProductInformation);
  }
}
