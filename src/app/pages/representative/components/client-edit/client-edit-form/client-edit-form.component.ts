import { Component, OnInit, Input } from "@angular/core";
import { environment } from 'src/environments/environment';
import { IClient } from 'src/app/shared/models/IClient';

@Component({
  selector: "app-client-form",
  templateUrl: "./client-edit-form.component.html",
  styleUrls: ["./client-edit-form.component.css"],
})
export class ClientEditFormComponent implements OnInit {
  @Input() client: IClient;
  cityApi = `${environment.serviceApi}cidades/po-combo`;
  constructor() {}

  ngOnInit(): void {}
}
