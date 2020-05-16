import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-apresentacao",
  templateUrl: "./apresentacao.component.html",
  styleUrls: ["./apresentacao.component.css"],
})
export class ApresentacaoComponent implements OnInit {
  @Input() mensagem: string;
  @Input() setor: string;
  @Input() buttonLabel: string;
  @Input() buttonIcon: string;
  @Output() buttonAction = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  acao() {
    this.buttonAction.emit();
  }
}
