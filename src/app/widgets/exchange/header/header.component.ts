import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  todayDate: Date = new Date();

  @Input() title = "Exchange currency";
  @Input() currencyPipe1 = "1";
  @Input() currencyPipe2 = "0.94";
}
