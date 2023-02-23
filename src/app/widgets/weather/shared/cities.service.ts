import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  selectedCity = 1;
  cities = ['Kraków', 'Gdańsk', 'Bydgoszcz', 'Warszawa', 'Poznań'];

  
}
