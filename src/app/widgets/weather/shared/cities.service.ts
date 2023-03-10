import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  cities = [
    {
      name: "Gdańsk",
      latitude: 54.35,
      longitude: 18.65
    },
    {
      name: "Kraków",
      latitude: 50.06,
      longitude: 19.94
    },
    {
      name: "Warszawa",
      latitude: 52.23,
      longitude: 21.01
    },
  ];

}
