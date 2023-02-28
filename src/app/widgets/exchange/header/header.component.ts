import { Exchange } from "./../interfaces/Currency";
import { Component, Input, OnInit } from "@angular/core";
import { SelectedCurrencyIdService } from "../services/selected-currency-id.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  ngOnInit() {
    this.selectedCurrency.selectedCurrency.subscribe(
      (exchange) => (this.currentCurrency = exchange)
    );
  }

  currentCurrency: Exchange = {} as Exchange;

  constructor(public selectedCurrency: SelectedCurrencyIdService) {}

  todayDate: Date = new Date();

  @Input() title = "Exchange currency";
  @Input() currencyPipe1 = "1";
  @Input() currencyPipe2 = "0.94";
}
