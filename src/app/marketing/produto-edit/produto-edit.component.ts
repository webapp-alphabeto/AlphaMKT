import { Component, OnInit, Input } from '@angular/core';
import { ProdutoInfoComplementar } from 'src/app/interfaces/produto-info-complementar';
import { FotoProdutoView } from 'src/app/interfaces/foto-produto-view';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  @Input() ProdutoView: FotoProdutoView;
  produtoEdit: ProdutoInfoComplementar;
  
  constructor() { }


  ngOnInit() {
    console.log(this.ProdutoView.referencia)

  }

  CarregarDados(){
    console.log('carregar dados')
  }
}
