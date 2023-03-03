import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BusesComponent } from "./buses.component";
import { IncomingBusesComponent } from "./incoming-buses/incoming-buses.component";
import { ListOfBusesComponent } from "./list-of-buses/list-of-buses.component";
import { ChosenBusStopComponent } from "./chosen-bus-stop/chosen-bus-stop.component";
import { HttpClientModule } from "@angular/common/http";
import { SettingsBusesComponent } from "./settings-buses/settings-buses.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AdminBusesComponent } from './admin-buses/admin-buses.component';

@NgModule({
  declarations: [
    BusesComponent,
    IncomingBusesComponent,
    ListOfBusesComponent,
    ChosenBusStopComponent,
    SettingsBusesComponent,
    AdminBusesComponent,
  ],
  imports: [CommonModule, HttpClientModule, AppRoutingModule],
  exports: [BusesComponent],
})
export class BusesModule {}
