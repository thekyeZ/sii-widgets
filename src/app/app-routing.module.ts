import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BusesComponent } from "./widgets/buses/buses.component";
import { SettingsBusesComponent } from "./widgets/buses/settings-buses/settings-buses.component";

const routes: Routes = [
  {
    path: "buses",
    component: BusesComponent,
  },
  {
    path: "buses/settings",
    component: SettingsBusesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
