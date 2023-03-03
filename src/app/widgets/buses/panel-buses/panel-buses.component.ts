import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { busStopNames } from '../model-buses/busStop.model';
import { BusStopsService } from '../services-buses/bus-stops.service';

@Component({
  selector: 'app-panel-buses',
  templateUrl: './panel-buses.component.html',
  styleUrls: ['./panel-buses.component.scss']
})
export class PanelBusesComponent {
  busStops!: busStopNames;
  
  constructor(
    private busStopsService: BusStopsService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.busStopsService
      .getBusStops()
      .subscribe((busStops) => (this.busStops = busStops));
  }
  onOpenSettings() {
    this.router.navigate(["buses-admin"]);
  }


}
