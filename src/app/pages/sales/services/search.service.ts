import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  private $searchValue = new BehaviorSubject<string>(null);

  searchValue = this.$searchValue.asObservable();

  public setValue(v: string) {
    this.$searchValue.next(v);
  }
  
  constructor() {}
}
