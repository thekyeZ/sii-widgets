import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CryptoAdminComponent } from "./widgets/crypto/crypto-admin/crypto-admin.component";
import { CryptoDetailsComponent } from "./widgets/crypto/crypto-details/crypto-details.component";
import { CryptoComponent } from "./widgets/crypto/crypto.component";

const routes: Routes = [
  {
    path: " ",
    component: CryptoComponent,
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
export class AppRoutingModule {}
