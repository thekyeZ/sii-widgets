import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusesComponent } from './buses.component';
import { IncomingBussesComponent } from './incoming-busses/incoming-busses.component';
import { ListOfBussesComponent } from './list-of-busses/list-of-busses.component';
import { SettingsComponent } from './settings/settings.component';
import { ChosenBusStopComponent } from './chosen-bus-stop/chosen-bus-stop.component';

@NgModule({
  declarations: [
    BusesComponent,
    IncomingBussesComponent,
    ListOfBussesComponent,
    SettingsComponent,
    ChosenBusStopComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BusesComponent
  ]
})
export class BusesModule { }
