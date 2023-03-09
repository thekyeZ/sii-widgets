import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BusesComponent } from "./buses.component";
import { IncomingBusesComponent } from "./panel-buses/incoming-buses/incoming-buses.component";
import { ListOfBusesComponent } from "./panel-buses/list-of-buses/list-of-buses.component";
import { ChosenBusStopComponent } from "./panel-buses/chosen-bus-stop/chosen-bus-stop.component";
import { HttpClientModule } from "@angular/common/http";
import { SettingsBusesComponent } from "./panel-buses/settings-buses/settings-buses.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { PanelBusesComponent } from "./panel-buses/panel-buses.component";
import { AdminPanelBusesComponent } from "./admin-panel-buses/admin-panel-buses.component";
import { BusesRoutingModule } from "./buses-routing.module";
import { FormsModule } from "@angular/forms";
import { OnlyUpperCase } from "./pipes-buses/onlyUpperCase.pipe";
import { NoRepeatsPipe } from "./pipes-buses/noRepeats.pipe";

@NgModule({
  declarations: [
    BusesComponent,
    IncomingBusesComponent,
    ListOfBusesComponent,
    ChosenBusStopComponent,
    SettingsBusesComponent,
    PanelBusesComponent,
    AdminPanelBusesComponent,
    OnlyUpperCase,
    NoRepeatsPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BusesRoutingModule,
    FormsModule,
  ],
  exports: [BusesComponent],
})
export class BusesModule {}
