import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToolBarService } from 'src/app/shared/services/tool-bar.service';
import { IApresentacaoButtons } from 'src/app/shared/interfaces/iapresentacao-buttons';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
 
  constructor(
    private toolBarService: ToolBarService,
    private menuService: MenuService) {

      this.toolBarService.exibir();
      this.menuService.exibirMenu()
    }

  ngOnInit(): void {
  }


}
