import { Component, OnInit, Input } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent implements OnInit {

  @Input() height: number = 600;
  @Input() menu: Array<PoMenuItem> = [];
  @Input() image: string;
  @Input() title: string;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goTo(link: string) {
    this.route.navigateByUrl(link);
  }

}
