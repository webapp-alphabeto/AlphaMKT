import { Component, OnInit, Input } from '@angular/core';
import { IRepresentanteClienteEdit } from '../../../Interfaces/irepresentante-cliente-edit';

@Component({
  selector: 'app-revisao',
  templateUrl: './revisao.component.html',
  styleUrls: ['./revisao.component.css']
})
export class RevisaoComponent implements OnInit {
  @Input() cliente: IRepresentanteClienteEdit;

  constructor() { }

  ngOnInit(): void {
  }

}
