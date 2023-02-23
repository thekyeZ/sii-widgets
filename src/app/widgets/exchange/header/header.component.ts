import { Component, Input } from "@angular/core";
import { SelectedCurrencyIdService } from "../selected-currency-id.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor(public selectedCurrency: SelectedCurrencyIdService) {}

  todayDate: Date = new Date();

  @Input() title = "Exchange currency";
  @Input() currencyPipe1 = "1";
  @Input() currencyPipe2 = "0.94";

  setSelectedCurrency(index: number) {
    this.selectedCurrency.selectedCurrency.next(index);
  }
}
