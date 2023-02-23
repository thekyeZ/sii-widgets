import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SelectedCurrencyIdService {
  selectedCurrency = new BehaviorSubject(2);
}
