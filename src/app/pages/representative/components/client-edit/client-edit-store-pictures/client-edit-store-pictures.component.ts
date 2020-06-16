import { Component, OnInit, Input } from '@angular/core';
import { IStorePictures } from 'src/app/shared/models/IStorePictures';

@Component({
  selector: 'app-client-edit-store-pictures',
  templateUrl: './client-edit-store-pictures.component.html',
  styleUrls: ['./client-edit-store-pictures.component.css']
})
export class ClientEditStorePicturesComponent implements OnInit {

  @Input() storePictures: IStorePictures[];
  constructor() { }

  ngOnInit(): void {
  }

}
