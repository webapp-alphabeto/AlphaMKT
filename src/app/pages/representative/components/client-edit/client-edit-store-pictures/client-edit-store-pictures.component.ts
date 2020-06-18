import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { StorePicturesView } from "../../../interfaces/StorePicturesView";
import { PoModalComponent, PoModalAction } from "@po-ui/ng-components";
import { StorePictureService } from "src/app/shared/services/store-picture.service";

@Component({
  selector: "app-client-edit-store-pictures",
  templateUrl: "./client-edit-store-pictures.component.html",
  styleUrls: ["./client-edit-store-pictures.component.css"],
})
export class ClientEditStorePicturesComponent implements OnInit {
  @ViewChild("newStorePictures", { static: true })
  newStorePicturesModal: PoModalComponent;

  @Input() storePictures: StorePicturesView[];
  @Input() clientId: number;
  @Input() cnpj: string;

  modalNewPrimaryAction: PoModalAction = {
    action: () => this.newStorePicturesModal.close(),
    label: "fechar",
  };

  constructor(private storePictureService: StorePictureService) {}

  ngOnInit(): void {}

  openForCreate() {
    this.newStorePicturesModal.open();
  }

  download(url: string) {
    window.open(url, "_blank");
  }

  get() {
    this.storePictureService.get(this.clientId).subscribe((x) => {
      this.storePictures = x;
    });
  }

  delete(item: StorePicturesView) {
    this.storePictureService.delete(item.id).subscribe(() => {
      this.get();
    });
  }
}
