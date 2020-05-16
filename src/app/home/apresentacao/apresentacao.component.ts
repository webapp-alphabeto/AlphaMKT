import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IApresentacaoButtons } from 'src/app/interfaces/iapresentacao-buttons';

@Component({
  selector: "app-apresentacao",
  templateUrl: "./apresentacao.component.html",
  styleUrls: ["./apresentacao.component.css"],
})
export class ApresentacaoComponent implements OnInit {
  @Input() mensagem: string;
  @Input() setor: string;
  @Input() buttons: IApresentacaoButtons[];

  constructor() {}

  ngOnInit(): void {}


}
