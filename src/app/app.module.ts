import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherModule } from './widgets/weather/weather.module';
import { ExchangeModule } from './widgets/exchange/exchange.module';
import { CryptoModule } from './widgets/crypto/crypto.module';
import { NorrisModule } from './widgets/norris/norris.module';
import { DogsModule } from './widgets/dogs/dogs.module';
import { GotModule } from './widgets/got/got.module';
import { BusesModule } from './widgets/buses/buses.module';
import { CryptoService } from './widgets/crypto/crypto.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    WeatherModule,
    ExchangeModule,
    CryptoModule,
    NorrisModule,
    DogsModule,
    GotModule,
    BusesModule,
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
