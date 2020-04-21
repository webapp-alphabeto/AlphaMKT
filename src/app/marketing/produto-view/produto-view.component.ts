import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { FotoProdutoInfoView } from 'src/app/interfaces/foto-produto-view';


@Component({
  selector: 'app-produto-view',
  templateUrl: './produto-view.component.html',
  styleUrls: ['./produto-view.component.css']
})
export class ProdutoViewComponent implements OnInit {

  @Input() produto: FotoProdutoInfoView;
  @Output() detalhar = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  carregarDados(){
    this.detalhar.emit(null);

  }

}
