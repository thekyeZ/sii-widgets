import { Injectable } from '@angular/core';
import { busStopNames } from '../model-buses/busStop.model';
import { FetchBusStopsService } from './fetch-bus-stops.service';

@Injectable({
  providedIn: 'root'
})
export class BusStopsService {
  private busStops: busStopNames = [];

  constructor(private fetchBusStopsService: FetchBusStopsService) {}

}
