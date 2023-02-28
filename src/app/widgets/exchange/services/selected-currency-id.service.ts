import { Exchange } from "./../interfaces/Currency";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SelectedCurrencyIdService {
  selectedCurrency = new BehaviorSubject({
    currencyFirst: "EUR",
    currencySecond: "USD",
  } as Exchange);
}
