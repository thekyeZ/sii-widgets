import { CurrencyHomeComponent } from "./widgets/exchange/currency-home/currency-home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CurrencyAdminComponent } from "./widgets/exchange/currency-admin/currency-admin.component";

const routes: Routes = [
  { path: "", component: CurrencyHomeComponent },
  { path: "currency/admin", component: CurrencyAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
