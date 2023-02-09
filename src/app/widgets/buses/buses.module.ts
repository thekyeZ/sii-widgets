import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusesComponent } from './buses.component';
import { HeaderComponent } from './header/header.component';
import { IncomingBussesComponent } from './incoming-busses/incoming-busses.component';
import { ListOfBussesComponent } from './list-of-busses/list-of-busses.component';
import { ChosenBusStopComponent } from './incoming-busses/chosen-bus-stop/chosen-bus-stop.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    BusesComponent,
    HeaderComponent,
    IncomingBussesComponent,
    ListOfBussesComponent,
    ChosenBusStopComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BusesComponent
  ]
})
export class BusesModule { }
