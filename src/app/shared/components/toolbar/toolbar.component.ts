import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { ToolBarService } from "src/app/shared/services/tool-bar.service";
import { ProfileService } from "src/app/shared/services/profile.service";
import { PoToolbarAction, PoNotificationService, PoDialogService } from "@po-ui/ng-components";
import { Router } from "@angular/router";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"],
})
export class ToolbarComponent implements OnInit {
  profileActions: Array<PoToolbarAction> = [
    {
      icon: "po-icon-user",
      label: "Meu Perfil",
      action: () => this.router.navigateByUrl("/home/meu-perfil"),
    },
    {
      icon: "po-icon-exit",
      label: "Exit",
      type: "danger",
      separator: true,
      action: () => this.auth.logout(),
    },
  ];

  actions: Array<PoToolbarAction> = [
    { label: 'Start cash register', action: item => this.showAction(item) },
    { label: 'Finalize cash register', action: item => this.showAction(item) },
    { label: 'Cash register options', action: item => this.showAction(item) }
  ];

  notificationActions: Array<PoToolbarAction> = [
    {
      icon: 'po-icon-news',
      label: 'PO news, stay tuned!',
      type: 'danger',
      action: item => this.onClickNotification(item)
    },
    { icon: 'po-icon-message', label: 'New message', type: 'danger', action: item => this.openDialog(item) }
  ];

  constructor(
    public auth: AuthService,
    public toolBarService: ToolBarService,
    public profileService: ProfileService,
    private router: Router,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService
  ) {}

  ngOnInit(): void {}

  showAction(item: PoToolbarAction): void {
    this.poNotification.success(`Action clicked: ${item.label}`);
  }

  onClickNotification(item: PoToolbarAction) {
    window.open('https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md', '_blank');

    item.type = 'default';
  }

  openDialog(item: PoToolbarAction) {
    this.poDialog.alert({
      title: 'Welcome',
      message: `Hello Mr. Dev! Congratulations, you are a TOTVER!`,
      ok: undefined
    });

    item.type = 'default';
  }
}
