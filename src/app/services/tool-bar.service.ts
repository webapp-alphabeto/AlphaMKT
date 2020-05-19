import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ToolBarService {
  private show = new BehaviorSubject<boolean>(true);
  Show = this.show.asObservable();

  ocultar() {
    this.show.next(false);
  }

  exibir() {
    this.show.next(true);
  }
}
