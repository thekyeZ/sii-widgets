import {
  Exchange,
  ExchangeResult,
  Rate,
  Rates,
} from "./../interfaces/Currency";
import { Component, Input, OnInit } from "@angular/core";
import { SelectedCurrencyIdService } from "../services/selected-currency-id.service";
import { CurrenciesService } from "../services/currenciesList.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() exchange!: ExchangeResult;
  @Input() rate!: Rates;

  currentCurrency!: Exchange;
  currencyRate: Rate | null = null;

  constructor(
    public selectedCurrencyService: SelectedCurrencyIdService,
    private currencyRateService: CurrenciesService
  ) {}

  ngOnInit() {
    this.selectedCurrencyService.selectedCurrency.subscribe((exchange) => {
      this.currentCurrency = exchange;
      const pairs = `${this.currentCurrency.currencyFrom}${this.currentCurrency.currencyTo}`;
      this.currencyRateService.requestRates(pairs).subscribe((response) => {
        this.currencyRate = response.rates[pairs];
      });
    });
  }

  todayDate: Date = new Date();
}
