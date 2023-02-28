import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ExchangeResult } from "../interfaces/Currency";
import { Exchange } from "../interfaces/Currency";
import { map, take } from "rxjs";
// import { SelectedCurrencyIdService } from "./selected-currency-id.service";

@Injectable({
  providedIn: "root",
})
export class CurrenciesService {
  constructor(private http: HttpClient) {}

  requestCurrencies() {
    return this.http.get<ExchangeResult>("/api/live", {}).pipe(
      map((exchangeResult: any) => {
        return exchangeResult.supportedPairs.map((currencies: any) => {
          return {
            currencyFirst: currencies.substring(0, 3),
            currencySecond: currencies.substring(3),
          };
        });
      })
    );
  }
}
