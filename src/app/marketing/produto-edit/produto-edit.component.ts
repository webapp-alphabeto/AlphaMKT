import { Component, OnInit, Input } from '@angular/core';
import { ProdutoInfoComplementar } from 'src/app/interfaces/produto-info-complementar';
import { ProdutoInfoComplementarService } from 'src/app/services/produto-info-complementar.service';
import { ProdutoFotoService } from 'src/app/services/produto-foto.service';
import { ProdutoImagem } from 'src/app/interfaces/produto-imagem';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produtoInfoComplementar = {} as ProdutoInfoComplementar;
  fotosDoProduto = [] as ProdutoImagem[];

  uploadApi = `${environment.serviceApi}foto-produto/upload`;

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
      .subscribe((x: ProdutoInfoComplementar) => {
        if (x === null) {
          this.produtoInfoComplementar = {} as ProdutoInfoComplementar;
          return;
        }

        this.produtoInfoComplementar = x;
      });
  }

  private carregarFotosDoProduto(referencia: string) {
    this.produtoFotoService
      .getByReferencia(referencia)
      .subscribe((x: ProdutoImagem[]) => { this.fotosDoProduto = x });
  }

  atualizarImagens(referencia: string) {
    this.produtoFotoService
      .updateByReferencia(this.fotosDoProduto)
      .subscribe((x) => { this.carregarFotosDoProduto(referencia); });
  }

  alternarCapadeSite(item: ProdutoImagem) {
    this.fotosDoProduto.forEach(x => {
      if (x.id !== item.id)
        x.capaSite = false;

    });

    this.atualizarImagens(item.referencia);
  }

  alternarCapadeErp(item: ProdutoImagem) {
    this.fotosDoProduto.forEach(x => {
      if (x.id !== item.id)
        x.capaERP = false;

    });

    this.atualizarImagens(item.referencia);
  }

  deletarImagem(item: ProdutoImagem) {
    this.produtoFotoService
        .deleteById(item.id)
        .subscribe((x) => { this.carregarFotosDoProduto(item.referencia) });
  }

  uploadSuccess() {
    this.carregarFotosDoProduto(this.produtoInfoComplementar.referencia);
  }

  incluirImagemDoPerfil(evento: any) {
    evento.data.referencia = this.produtoInfoComplementar.referencia;
  }
}
