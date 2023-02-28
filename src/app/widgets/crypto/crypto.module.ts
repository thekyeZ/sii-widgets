import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CryptoComponent } from "./crypto.component";
import { MainBodyComponent } from "./main-body/main-body.component";
import { ListingsComponent } from "./listings/listings.component";
import { HttpClientModule } from "@angular/common/http";
import { CryptoTableComponent } from "./crypto-table/crypto-table.component";
import { MoreInfoComponent } from './crypto-table/more-info/more-info.component';

@NgModule({
  declarations: [
    CryptoComponent,
    MainBodyComponent,
    ListingsComponent,
    CryptoTableComponent,
    MoreInfoComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [CryptoComponent],
})
export class CryptoModule {}
