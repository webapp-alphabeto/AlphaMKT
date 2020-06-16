import { Component, OnInit, Input } from "@angular/core";
import { environment, SEM_FOTO } from "src/environments/environment";
import { HttpResponse } from "@angular/common/http";
import { DataFoto } from '../../../interfaces/DataFoto';
import { PhotoPosition } from '../../../enums/photo-position.enum';
import { UploadResponse } from '../../../interfaces/UploadResponse';

@Component({
  selector: "app-client-new-store-pictures",
  templateUrl: "./client-new-store-pictures.component.html",
  styleUrls: ["./client-new-store-pictures.component.css"],
})
export class ClientNewStorePicturesComponent implements OnInit {
  @Input() cnpj: string;
  @Input() fotos: UploadResponse[];
  serviceApi = `${environment.serviceApi}novo-cliente/upload`;
  fotoPadrao = SEM_FOTO;

  fachada = {
    dataFoto: {
      cnpj: this.cnpj,
      photoPosition: PhotoPosition.Fachada,
    } as DataFoto,
  } as UploadResponse;

  daPortaParaOsFundos = {
    dataFoto: {
      cnpj: this.cnpj,
      photoPosition: PhotoPosition.DaPortaParaOsFundos,
    } as DataFoto,
  } as UploadResponse;

  dosFundosParaAPorta = {
    dataFoto: {
      cnpj: this.cnpj,
      photoPosition: PhotoPosition.DosFundosParaAPorta,
    } as DataFoto,
  } as UploadResponse;

  constructor() {}

  ngOnInit(): void {
    if (this.fotos.length == 0) {
      this.fotos.push(this.fachada);
      this.fotos.push(this.daPortaParaOsFundos);
      this.fotos.push(this.dosFundosParaAPorta);
    }
  }

  retornoComSucesso(reponse: HttpResponse<UploadResponse>, item: UploadResponse) {
    item.name = reponse.body.name;
    item.url = reponse.body.url;
  }

  setDataFoto(event: any, item: UploadResponse) {
    item.dataFoto.cnpj = this.cnpj;
    event.data = item.dataFoto;
  }
}
