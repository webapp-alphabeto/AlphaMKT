import { Component, OnInit, Input } from '@angular/core';
import { FotoDosPontos } from '../../../interfaces/imy-client';

@Component({
  selector: 'app-client-photos-of-point',
  templateUrl: './client-photos-of-point.component.html',
  styleUrls: ['./client-photos-of-point.component.css']
})
export class ClientPhotosOfPointComponent implements OnInit {

  @Input() photosOfPoint: FotoDosPontos[];
  constructor() { }

  ngOnInit(): void {
  }

}
