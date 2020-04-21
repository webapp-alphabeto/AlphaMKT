import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { FotoProdutoInfoView } from 'src/app/interfaces/foto-produto-view';
import { PoWidgetComponent, PoButtonComponent } from '@po-ui/ng-components';


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
