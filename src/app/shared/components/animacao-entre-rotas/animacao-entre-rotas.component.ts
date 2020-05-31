import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-animacao-entre-rotas",
  templateUrl: "./animacao-entre-rotas.component.html",
  styleUrls: ["./animacao-entre-rotas.component.css"],
})
export class AnimacaoEntreRotasComponent implements OnInit {
  @Input() exibirAnimacaoDeRota: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
