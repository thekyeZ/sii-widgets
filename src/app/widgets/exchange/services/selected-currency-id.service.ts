import { Exchange } from "./../interfaces/Currency";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SelectedCurrencyIdService {
  selectedCurrency = new BehaviorSubject({
    currencyFrom: "EUR",
    currencyTo: "USD",
  } as Exchange);

  constructor() {
    const savedCurrency = localStorage.getItem("form-data");
    if (savedCurrency) {
      this.selectedCurrency.next(JSON.parse(savedCurrency));
    }
  }
}
