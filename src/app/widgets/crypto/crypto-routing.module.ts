import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CryptoAdminComponent } from "./crypto-admin/crypto-admin.component";
import { CryptoComponent } from "./crypto.component";

const routes: Routes = [
  {
    path: " ",
    component: CryptoComponent,
  },
  {
    path: "admin/crypto",
    component: CryptoAdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CryptoRoutingModule {}
