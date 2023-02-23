import { Exchange } from "./../../../interfaces/Currency";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-currencies",
  templateUrl: "./currencies.component.html",
  styleUrls: ["./currencies.component.scss"],
})
export class CurrenciesComponent {
  // @Input() currencies: string[] = [];
  @Input() exchange!: Exchange[];
}
