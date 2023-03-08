import { SelectedCurrencyIdService } from "./services/selected-currency-id.service";
import { CurrenciesService } from "./services/currenciesList.service";
import { Exchange } from "./interfaces/Currency";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-exchange",
  templateUrl: "./exchange.component.html",
  styleUrls: ["./exchange.component.scss"],
  providers: [CurrenciesService],
})
export class ExchangeComponent {
  selectedCurrency!: number;

  exchange!: Exchange[];
  // exchange: Exchange[] = [];

  constructor(
    // private selectedCurrencyService: SelectedCurrencyIdService,
    // private currencyListService: CurrenciesService,
    private router: Router
  ) {}

  navigateToCurrency() {
    this.router.navigate([""]);
  }
  navigateToCurrency2() {
    this.router.navigate(["currency/admin"]);
  }

  // ngOnInit(): void {
  //   this.currencyListService
  //     .requestCurrencies()
  //     .subscribe((results) => (this.exchange = results));
  //   this.selectedCurrencyService.selectedCurrency.subscribe((result) =>
  //     console.log(result)
  //   );
  // }
}
