import { Component, OnInit, Input } from "@angular/core";
import { IClient } from "../../../interfaces/imy-client";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-client-form",
  templateUrl: "./client-form.component.html",
  styleUrls: ["./client-form.component.css"],
})
export class ClientFormComponent implements OnInit {
  @Input() client: IClient;
  cityApi = `${environment.serviceApi}cidades/po-combo`;
  constructor() {}

  ngOnInit(): void {}
}
