import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FotoProdutoView } from 'src/app/interfaces/foto-produto-view';
import { ProdutoEditComponent } from '../produto-edit/produto-edit.component';
import { PoModalComponent } from '@portinari/portinari-ui';

@Component({
  selector: 'app-produto-view',
  templateUrl: './produto-view.component.html',
  styleUrls: ['./produto-view.component.css']
})
export class ProdutoViewComponent implements OnInit {

  @Input() produto: FotoProdutoView;
  
  @ViewChild(PoModalComponent, {static:true}) produtoEditModal: PoModalComponent;
  @ViewChild(ProdutoEditComponent, {static:true}) produtoEdit: ProdutoEditComponent;

  constructor() { }

  ngOnInit() {
  }

  abrirModal(){
    this.produtoEdit.CarregarDados();
    this.produtoEditModal.open();
  }

}
