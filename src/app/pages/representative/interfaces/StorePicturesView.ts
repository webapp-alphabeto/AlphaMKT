import { IStorePictures } from "src/app/shared/models/IStorePictures";

export interface StorePicturesView extends IStorePictures {
  photo: string;
  cnpj: string;
}
