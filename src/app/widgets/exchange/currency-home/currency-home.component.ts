import { SelectedCurrencyIdService } from "../services/selected-currency-id.service";
import { CurrenciesService } from "../services/currenciesList.service";
import { Exchange } from "../interfaces/Currency";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-currency-home",
  templateUrl: "./currency-home.component.html",
  styleUrls: ["./currency-home.component.scss"],
  providers: [CurrenciesService],
})
export class CurrencyHomeComponent implements OnInit {
  selectedCurrency!: number;
  exchange!: Exchange[];

  constructor(
    private selectedCurrencyService: SelectedCurrencyIdService,
    private currencyListService: CurrenciesService
  ) {}

  ngOnInit(): void {
    this.currencyListService
      .requestCurrencies()
      .subscribe((results) => (this.exchange = results));
    this.selectedCurrencyService.selectedCurrency.subscribe((result) =>
      console.log(result)
    );
  }
}
