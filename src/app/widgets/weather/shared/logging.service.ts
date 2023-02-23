import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logWeatherChange(status: string) {
    console.log('The weather will not change');
  }
}
