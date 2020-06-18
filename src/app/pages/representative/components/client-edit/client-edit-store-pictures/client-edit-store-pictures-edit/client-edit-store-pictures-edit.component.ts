import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { environment } from "src/environments/environment";
import { PoComboOption } from "@po-ui/ng-components";
import { PhotoPosition } from "src/app/pages/representative/enums/photo-position.enum";
import { PositionToStringPipe } from "src/app/pages/representative/pipe/position-to-string.pipe";
import { HttpResponse } from "@angular/common/http";
import { IStorePictures } from "src/app/shared/models/IStorePictures";
import { StorePicturesDataFoto } from "src/app/shared/interfaces/StorePicturesDataFoto";


@Component({
  selector: "app-client-edit-store-pictures-edit",
  templateUrl: "./client-edit-store-pictures-edit.component.html",
  styleUrls: ["./client-edit-store-pictures-edit.component.css"],
  providers: [PositionToStringPipe],
})
export class ClientEditStorePicturesEditComponent implements OnInit {
  @Input() clientId: number;
  @Input() cnpj: string;
  @Output() refresh = new EventEmitter();

  serviceApi = `${environment.serviceApi}shared/store-picture/upload`;

  options: Array<PoComboOption> = [
    {
      value: PhotoPosition.Fachada,
      label: this.positionPipe.transform(PhotoPosition.Fachada),
    },
    {
      value: PhotoPosition.DaPortaParaOsFundos,
      label: this.positionPipe.transform(PhotoPosition.DaPortaParaOsFundos),
    },
    {
      value: PhotoPosition.DosFundosParaAPorta,
      label: this.positionPipe.transform(PhotoPosition.DosFundosParaAPorta),
    },
  ];

  photoPosition: PhotoPosition = PhotoPosition.Fachada;

  constructor(private positionPipe: PositionToStringPipe) {}

  ngOnInit(): void {}

  successfulReturn(reponse: HttpResponse<IStorePictures>) {
    this.refresh.emit(null);
  }

  setDataFoto(event: any) {
    event.data = {
      clientId: this.clientId,
      photoPosition: this.photoPosition,
      cnpj: this.cnpj
    } as StorePicturesDataFoto;
  }
}
