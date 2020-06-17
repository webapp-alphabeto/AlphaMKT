import { Component, OnInit, Input } from '@angular/core';
import { ICommercialReference } from 'src/app/shared/models/ICommercialReference';

@Component({
  selector: 'app-client-edit-commercial-references-edit',
  templateUrl: './client-edit-commercial-references-edit.component.html',
  styleUrls: ['./client-edit-commercial-references-edit.component.css']
})
export class ClientEditCommercialReferencesEditComponent implements OnInit {
  @Input() commercialReference: ICommercialReference;
  constructor() {}

  ngOnInit(): void {}

}
