import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { CitiesData} from './shared/cities-data.model';
import { SelectedCityService } from './shared/selected-city.service';

@Component({
  selector: 'app-weather-admin',
  templateUrl: './weather-admin.component.html',
  styleUrls: ['./weather-admin.component.scss']
})
export class WeatherAdminComponent implements OnInit {
  adminForm!: FormGroup;
  // citiesData!: CitiesData;
  selectedCity!: number;
  cities = ['Kraków', 'Gdańsk', 'Warszawa'];
  i!: number;

  constructor(
    private router: Router,
    private selectedCityService: SelectedCityService,
    ) {}

  ngOnInit(): void {
    this.adminForm = new FormGroup({
      // 'city': new FormControl(this.selectedCity, Validators.required),
      'unit': new FormControl('C', Validators.required),
    });
    this.selectedCityService.selectedCity.subscribe(selectedCityFromService => this.selectedCity = selectedCityFromService);

  }

  onSelectedCity(i: number) {
    this.selectedCityService.selectedCity.next(i);
    console.log(this.selectedCity);
  }

  onSubmit() {
    console.log(this.adminForm.value);
    this.router.navigate(['/']);

  }

}
