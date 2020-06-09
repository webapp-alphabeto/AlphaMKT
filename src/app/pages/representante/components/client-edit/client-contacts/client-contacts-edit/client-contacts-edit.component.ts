import { Component, OnInit, Input } from "@angular/core";
import { Contato } from "src/app/pages/representante/interfaces/imy-client";

@Component({
  selector: "app-client-contacts-edit",
  templateUrl: "./client-contacts-edit.component.html",
  styleUrls: ["./client-contacts-edit.component.css"],
})
export class ClientContactsEditComponent implements OnInit {
  @Input() contact: Contato;
  constructor() {}

  ngOnInit(): void {}
}
