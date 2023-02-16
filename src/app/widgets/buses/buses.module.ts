import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BusesComponent } from "./buses.component";
import { IncomingBusesComponent } from "./incoming-buses/incoming-buses.component";
import { ListOfBusesComponent } from "./list-of-buses/list-of-buses.component";
import { SettingsComponent } from "./settings/settings.component";
import { ChosenBusStopComponent } from "./chosen-bus-stop/chosen-bus-stop.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    BusesComponent,
    IncomingBusesComponent,
    ListOfBusesComponent,
    SettingsComponent,
    ChosenBusStopComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [BusesComponent],
})
export class BusesModule {}
