import { Component, OnInit, Input } from "@angular/core";
import { IApresentacaoButtons } from 'src/app/shared/interfaces/iapresentacao-buttons';

@Component({
  selector: "app-common-presentation",
  templateUrl: "./common-presentation.component.html",
  styleUrls: ["./common-presentation.component.css"],
})
export class CommonPresentationComponent implements OnInit {
  @Input() message: string;
  @Input() setor: string;
  @Input() buttons: IApresentacaoButtons[];

  constructor() {}

  ngOnInit(): void {}

}
