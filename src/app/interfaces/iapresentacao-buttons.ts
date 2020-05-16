import { Event } from "@angular/router";
import { Action } from "rxjs/internal/scheduler/Action";

export interface IApresentacaoButtons {
  buttonLabel: string;
  buttonIcon?: string;
  buttonAction: Function;
}
