import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProductView } from 'src/app/pages/marketing/interfaces/iproduct-view';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  @Input() product= {} as IProductView;
  @Output() getDetails = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  loadData(){
    this.getDetails.emit(null);
  }

}
