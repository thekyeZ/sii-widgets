import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminBusesComponent } from "./widgets/buses/admin-buses/admin-buses.component";
import { BusesComponent } from "./widgets/buses/buses.component";

const busesRoutes: Routes = [
  { path: "buses", component: BusesComponent },
  { path: "buses-admin", component: AdminBusesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(busesRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
