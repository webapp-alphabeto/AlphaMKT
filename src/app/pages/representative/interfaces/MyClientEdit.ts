import { IContact } from 'src/app/shared/models/IContact';
import { ICommercialReference } from 'src/app/shared/models/ICommercialReference';
import { IStorePictures } from 'src/app/shared/models/IStorePictures';
import { IClient } from 'src/app/shared/models/IClient';
import { StorePicturesView } from './StorePicturesView';

export interface MyClientEdit {
  client: IClient;
  contacts: IContact[];
  storePictures: StorePicturesView[];
  commercialReference: ICommercialReference[];
}


