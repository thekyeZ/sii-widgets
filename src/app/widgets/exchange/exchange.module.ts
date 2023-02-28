import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExchangeComponent } from "./exchange.component";
import { HeaderComponent } from "./header/header.component";
import { CurrenciesComponent } from "./currencies/currencies.component";
import { HttpClientModule } from "@angular/common/http";
import { CurrencyListComponent } from "./currencies/currency-list/currency-list.component";
import { CurrencyItemComponent } from "./currencies/currency-list/currency-item/currency-item.component";

@NgModule({
  declarations: [
    ExchangeComponent,
    HeaderComponent,
    CurrenciesComponent,
    CurrencyListComponent,
    CurrencyItemComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [ExchangeComponent],
})
export class ExchangeModule {}
