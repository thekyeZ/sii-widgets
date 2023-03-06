import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CryptoAdminComponent } from "./crypto-admin/crypto-admin.component";
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CryptoRoutingModule {}
