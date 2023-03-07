import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CryptoAdminComponent } from "./crypto-admin/crypto-admin.component";
import { CryptoDetailsComponent } from "./crypto-details/crypto-details.component";
import { CryptoHomeComponent } from "./crypto-home/crypto-home.component";

const routes: Routes = [
  {
    path: "",
    component: CryptoHomeComponent,
  },
  {
    path: "crypto/admin",
    component: CryptoAdminComponent,
  },
  {
    path: "crypto/details",
    component: CryptoDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CryptoRoutingModule {}
