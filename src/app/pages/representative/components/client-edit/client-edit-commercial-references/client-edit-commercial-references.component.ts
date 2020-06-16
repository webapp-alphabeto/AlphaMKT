import { Component, OnInit, Input } from "@angular/core";
import { ICommercialReference } from 'src/app/shared/models/ICommercialReference';

@Component({
  selector: "app-client-edit-commercial-references",
  templateUrl: "./client-edit-commercial-references.component.html",
  styleUrls: ["./client-edit-commercial-references.component.css"],
})
export class ClientEditCommercialReferencesComponent implements OnInit {
  @Input() comercialReferences: ICommercialReference[];
  constructor() {}

  ngOnInit(): void {}
}
