import { NewContact } from "./NewContact";
import { NewComercialReferences } from "./NewComercialReferences";
import { IClient } from 'src/app/shared/models/IClient';
import { UploadResponse } from './UploadResponse';

export interface NewClient extends IClient {
  photos: UploadResponse[];
  commercialReferences: NewComercialReferences[];
  contacts: NewContact[];
}
