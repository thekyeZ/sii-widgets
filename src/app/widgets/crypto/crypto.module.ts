import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CryptoComponent } from "./crypto.component";
import { CryptoDetailsComponent } from "./crypto-details/crypto-details.component";
import { HttpClientModule } from "@angular/common/http";
import { CryptoTableComponent } from "./crypto-table/crypto-table.component";

@NgModule({
  declarations: [CryptoComponent, CryptoDetailsComponent, CryptoTableComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [CryptoComponent],
})
export class CryptoModule {}
