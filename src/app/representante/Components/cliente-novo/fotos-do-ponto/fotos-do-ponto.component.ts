import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos-do-ponto',
  templateUrl: './fotos-do-ponto.component.html',
  styleUrls: ['./fotos-do-ponto.component.css']
})
export class FotosDoPontoComponent implements OnInit {

  fachada;
  daPortaParaOsFundos;
  dosFundosParaAPorta;

  constructor() { }

  ngOnInit(): void {
  }

}
