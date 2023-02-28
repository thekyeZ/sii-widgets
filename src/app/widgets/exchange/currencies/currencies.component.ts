import { Exchange } from "../interfaces/Currency";
import { Component, Input } from "@angular/core";
import { SelectedCurrencyIdService } from "../services/selected-currency-id.service";

@Component({
  selector: "app-currencies",
  templateUrl: "./currencies.component.html",
  styleUrls: ["./currencies.component.scss"],
})
export class CurrenciesComponent {
  // @Input() currencies: string[] = [];
  @Input() exchange!: Exchange[];

  constructor(public selectedCurrencyService: SelectedCurrencyIdService) {}

  setSelectedCurrency(index: number) {
    this.selectedCurrencyService.selectedCurrency.next({
      currencyFirst: this.exchange[index].currencyFirst,
      currencySecond: this.exchange[index].currencySecond,
    });
  }
}
