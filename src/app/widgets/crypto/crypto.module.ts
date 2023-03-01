import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CryptoComponent } from "./crypto.component";
import { CryptoDetailsComponent } from "./crypto-details/crypto-details.component";
import { HttpClientModule } from "@angular/common/http";
import { CryptoTableComponent } from "./crypto-table/crypto-table.component";
import { CryptoAdminComponent } from "./crypto-admin/crypto-admin.component";
import { CryptoRoutingModule } from "./crypto-routing.module";

@NgModule({
  declarations: [
    CryptoComponent,
    CryptoDetailsComponent,
    CryptoTableComponent,
    CryptoAdminComponent,
  ],
  imports: [CommonModule, HttpClientModule, CryptoRoutingModule],
  exports: [CryptoComponent],
})
export class CryptoModule {}
