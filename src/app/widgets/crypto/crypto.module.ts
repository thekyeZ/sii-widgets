import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CryptoComponent } from "./crypto.component";
import { MainBodyComponent } from "./main-body/main-body.component";
import { ListingsComponent } from "./listings/listings.component";
import { HttpClientModule } from "@angular/common/http";
import { CryptoTableComponent } from "./crypto-table/crypto-table.component";

@NgModule({
  declarations: [
    CryptoComponent,
    MainBodyComponent,
    ListingsComponent,
    CryptoTableComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [CryptoComponent],
})
export class CryptoModule {}
