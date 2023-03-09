import { map } from "rxjs";
import { Rates } from "./../interfaces/Currency";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ExchangeResult } from "../interfaces/Currency";

@Injectable({
  providedIn: "root",
})
export class CurrenciesService {
  constructor(private http: HttpClient) {}

  private headers = new HttpHeaders({
    apikey: "AT7ksftGPKKmOKWkP6sh9RjBHzc4T4nT",
  });

  requestCurrencies() {
    return this.http
      .get<ExchangeResult>("/api/live", {
        headers: this.headers,
      })
      .pipe(
        map((exchangeResult) => {
          return exchangeResult.supportedPairs.map((currencies: any) => {
            return {
              currencyFrom: currencies.substring(0, 3),
              currencyTo: currencies.substring(3),
            };
          });
        })
      );
  }

  requestRates(pairs: string) {
    return this.http.get<Rates>(`/api/live?pairs=${pairs}`, {
      headers: this.headers,
    });
  }
}
