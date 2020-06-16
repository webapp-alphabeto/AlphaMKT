import { IEntityIdentity } from './IEntityIdentity';
import { IClient } from './IClient';
import { PhotoPosition } from 'src/app/pages/representative/enums/photo-position.enum';

export interface IStorePictures extends IEntityIdentity {
    clientId: number;
    client: IClient;
    photoPosition: PhotoPosition;
    storageName: string;
}
