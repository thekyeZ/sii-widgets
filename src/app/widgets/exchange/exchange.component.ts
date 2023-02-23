import { SelectedCurrencyIdService } from "./selected-currency-id.service";
import { ExchangeResult, Exchange } from "./../../interfaces/Currency";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, pipe } from "rxjs";

@Component({
  selector: "app-exchange",
  templateUrl: "./exchange.component.html",
  styleUrls: ["./exchange.component.scss"],
})
export class ExchangeComponent implements OnInit {
  selectedCurrency!: number;
  currenciesList = ["USD", "EUR", "PLN", "GBP", "SEK"];

  exchange!: Exchange[];

  constructor(
    private http: HttpClient,
    private selectedCurrencyService: SelectedCurrencyIdService
  ) {}

  ngOnInit(): void {
    this.requestCurrencies();
  }
  requestCurrencies() {
    this.http
      .get<ExchangeResult>("/api/live", {})
      .pipe(
        map((exchangeResult: any) => {
          return exchangeResult.supportedPairs.map((currencies: any) => {
            return {
              currencyFirst: currencies.substring(0, 3),
              currencySecond: currencies.substring(3),
            };
          });
        })
      )
      .subscribe((exchange) => {
        console.log(exchange);
        this.exchange = exchange;
      });
    this.selectedCurrency = this.selectedCurrencyService.selectedCurrency;
  }

  maintitle = " Exchange currency";
}

// requestPosts() {
//   this.http
//     .get<ExchangeResult>("/api/live")
//     .pipe
//     .subscribe((results) => (this.posts = results));
// }

//   listOfCurrencies = [
//     "Euro (EUR)",
//     "UK Pound Sterling (GBP)",
//     "Australian Dollar (AUD)",
//     "New Zealand Dollar (NZD)",
//     "Unites States Dollar (USD)",
//     "Canadian Dollar (CAD)",
//     "Swiss Franc (CHF)",
//     "Japanese Yen (JPY)",
//   ];

//   removeCurrency(currency: string) {
//     this.listOfCurrencies = this.listOfCurrencies.filter((e) => e !== currency);
//   }
// }
