import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FotoProdutoInfoView } from 'src/app/pages/marketing/interfaces/foto-produto-view';

@Component({
  selector: 'app-produto-view',
  templateUrl: './produto-view.component.html',
  styleUrls: ['./produto-view.component.css']
})
export class ProdutoViewComponent implements OnInit {

  @Input() produto= {} as FotoProdutoInfoView;
  @Output() detalhar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  carregarDados(){
    this.detalhar.emit(null);
  }

}
