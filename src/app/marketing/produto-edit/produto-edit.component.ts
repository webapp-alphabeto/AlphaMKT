import { Component, OnInit, Input } from '@angular/core';
import { ProdutoInfoComplementar } from 'src/app/interfaces/produto-info-complementar';
import { FotoProdutoInfoView } from 'src/app/interfaces/foto-produto-view';
import { ProdutoInfoComplementarService } from 'src/app/services/produto-info-complementar.service';
import { ProdutoFotoService } from 'src/app/services/produto-foto.service';
import { ProdutoImagem } from 'src/app/interfaces/produto-imagem';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produtoInfoComplementar = {} as ProdutoInfoComplementar;
  fotosDoProduto = [] as ProdutoImagem[];

  constructor(
    private produtoInfoComplementarService: ProdutoInfoComplementarService,
    private produtoFotoService: ProdutoFotoService) { }


  ngOnInit() {

  }

  CarregarDados(referencia: string) {
    this.carregarInfoComplementar(referencia);
    this.carregarFotosDoProduto(referencia);

  }

  private carregarInfoComplementar(referencia: string) {
    this.produtoInfoComplementarService
      .getByReferencia(referencia)
      .subscribe((x: ProdutoInfoComplementar) => { this.produtoInfoComplementar = x; });
  }

  private carregarFotosDoProduto(referencia: string) {
    this.produtoFotoService
      .getByReferencia(referencia)
      .subscribe((x: ProdutoImagem[]) => { this.fotosDoProduto = x });

  }
}
