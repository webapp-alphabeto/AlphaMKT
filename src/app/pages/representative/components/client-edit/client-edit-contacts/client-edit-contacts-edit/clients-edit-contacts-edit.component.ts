import { Component, OnInit, Input } from "@angular/core";
import { IContact } from 'src/app/shared/models/IContact';

@Component({
  selector: "app-client-edit-contacts-edit",
  templateUrl: "./client-edit-contacts-edit.component.html",
  styleUrls: ["./client-edit-contacts-edit.component.css"],
})
export class ClientEditContactsEditComponent implements OnInit {
  @Input() contact: IContact;
  constructor() {}

  ngOnInit(): void {}
}
