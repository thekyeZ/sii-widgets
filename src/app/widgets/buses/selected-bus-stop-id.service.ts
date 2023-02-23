import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedBusStopIdService {
  selectedBusStop: number = 1;
}
