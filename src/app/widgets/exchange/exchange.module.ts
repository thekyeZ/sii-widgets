import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExchangeComponent } from "./exchange.component";
import { HeaderComponent } from "./header/header.component";
import { CurrenciesComponent } from "./currencies/currencies.component";
import { CurrencyItemComponent } from "./currencies/currency-item/currency-item.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    ExchangeComponent,
    HeaderComponent,
    CurrenciesComponent,
    CurrencyItemComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [ExchangeComponent],
})
export class ExchangeModule {}
