import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PanelBusesComponent } from "./panel-buses/panel-buses.component";
import { AdminPanelBusesComponent } from "./admin-panel-buses/admin-panel-buses.component";

const busesRoutes: Routes = [
  { path: "", component: PanelBusesComponent },
  { path: "admin/buses", component: AdminPanelBusesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(busesRoutes)],
  exports: [RouterModule],
})
export class BusesRoutingModule {}

