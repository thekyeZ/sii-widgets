import { SelectedCurrencyIdService } from "./services/selected-currency-id.service";
import { CurrenciesService } from "./services/currenciesList.service";
import { Exchange } from "./interfaces/Currency";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exchange",
  templateUrl: "./exchange.component.html",
  styleUrls: ["./exchange.component.scss"],
  providers: [CurrenciesService],
})
export class ExchangeComponent implements OnInit {
  selectedCurrency!: number;

  exchange!: Exchange[];
  // exchange: Exchange[] = [];

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

  maintitle = " Exchange currency";
}

// selectedTheCurrency() {
//   this.selectedCurrencyService.selectedCurrency.subscribe(
//     (selectedCurrencyFromService: any) =>
//       (this.selectedCurrency = selectedCurrencyFromService)
//   );
// }

// requestCurrencies() {
//   this.http
//     .get<ExchangeResult>("/api/live", {})
//     .pipe(
//       map((exchangeResult: any) => {
//         return exchangeResult.supportedPairs.map((currencies: any) => {
//           return {
//             currencyFirst: currencies.substring(0, 3),
//             currencySecond: currencies.substring(3),
//           };
//         });
//       })
//     )
//     .subscribe((exchange) => {
//       console.log(exchange);
//       this.exchange = exchange;
//     });
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
