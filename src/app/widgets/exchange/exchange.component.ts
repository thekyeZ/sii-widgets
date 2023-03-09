import { CurrenciesService } from "./services/currenciesList.service";
import { Exchange } from "./interfaces/Currency";
import { Component } from "@angular/core";
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

  constructor(private router: Router) {}

  navigateToCurrency() {
    this.router.navigate([""]);
  }
  navigateToCurrency2() {
    this.router.navigate(["currency/admin"]);
  }
}
