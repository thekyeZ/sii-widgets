import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ExchangeComponent } from "./exchange.component";
import { HeaderComponent } from "./header/header.component";
import { CurrenciesComponent } from "./currencies/currencies.component";
import { HttpClientModule } from "@angular/common/http";
import { CurrencyListComponent } from "./currencies/currency-list/currency-list.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { CurrencyAdminComponent } from "./currency-admin/currency-admin.component";
import { CurrencyHomeComponent } from "./currency-home/currency-home.component";

@NgModule({
  declarations: [
    ExchangeComponent,
    HeaderComponent,
    CurrenciesComponent,
    CurrencyListComponent,
    CurrencyAdminComponent,
    CurrencyHomeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports: [ExchangeComponent],
})
export class ExchangeModule {}
