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
  exchange!: Exchange[];

  constructor(private currencyListService: CurrenciesService) {}

  ngOnInit(): void {
    this.currencyListService
      .requestCurrencies()
      .subscribe((results) => (this.exchange = results));
  }
}
