import { Component, OnInit, Input } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent implements OnInit {

  @Input() altura: number = 600;
  @Input() menu: Array<PoMenuItem> = [];
  @Input() imagem: string;
  @Input() titulo: string;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  irPara(link: string) {
    this.route.navigateByUrl(link);
  }

}
