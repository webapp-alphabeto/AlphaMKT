import { Component, OnInit } from '@angular/core';
import { ProdutoInfoComplementar } from 'src/app/interfaces/produto-info-complementar';
import { ProdutoInfoComplementarService } from 'src/app/services/produto-info-complementar.service';
import { ProdutoFotoService } from 'src/app/services/produto-foto.service';
import { ProdutoImagem } from 'src/app/interfaces/produto-imagem';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PoUploadFileRestrictions } from '@po-ui/ng-components';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produtoInfoComplementar = {} as ProdutoInfoComplementar;
  fotosDoProduto = [] as ProdutoImagem[];
  restrictions: PoUploadFileRestrictions = {
    maxFileSize: 1000000
  };


  uploadApi = `${environment.serviceApi}foto-produto/upload`;

  private inserir = false;
  private referencia: string;


  constructor(
    private produtoInfoComplementarService: ProdutoInfoComplementarService,
    private produtoFotoService: ProdutoFotoService) { }


  ngOnInit() {

  }

  CarregarDados(referencia: string) {
    this.referencia = referencia;
    this.carregarInfoComplementar(referencia);
    this.carregarFotosDoProduto(referencia);

  }

  private carregarInfoComplementar(referencia: string) {
    this.produtoInfoComplementarService
      .getByReferencia(referencia)
      .subscribe((x: ProdutoInfoComplementar) => {
        if (x === null) {
          this.inserir = true;
          this.produtoInfoComplementar = {} as ProdutoInfoComplementar;
          return;
        }

        this.inserir = false;
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
    this.carregarFotosDoProduto(this.referencia);
  }

  incluirImagemDoPerfil(evento: any) {
    evento.data.referencia = this.referencia;
  }

  atualizarInfoComplementar() : Observable<any> {
    if (this.inserir) {

      this.produtoInfoComplementar.referencia = this.referencia;

     return this.produtoInfoComplementarService
        .incluirInfoComplementarProduto(this.produtoInfoComplementar);  
    }

   return this.produtoInfoComplementarService
      .atualizarInfoComplementarProduto(this.produtoInfoComplementar);
  }
}
