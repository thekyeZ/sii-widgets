import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SelectedCurrencyIdService {
  selectedCurrency = 1;
  constructor() {}
}
