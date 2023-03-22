import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CitiesService } from '../shared/cities.service';
import { CitiesData} from '../shared/cities-data.model';
import { SelectedCityService } from '../shared/selected-city.service';
import { StorageCityService } from '../shared/storage-city.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-admin',
  templateUrl: './weather-admin.component.html',
  styleUrls: ['./weather-admin.component.scss']
})
export class WeatherAdminComponent implements OnInit {
  adminForm!: FormGroup;
  selectedCity!: number;
  cities: CitiesData[] = this.citiesService.cities;
  selectedCityServiceSubscription!: Subscription;
  availableCountries = ['Poland', 'Polska'];


  constructor(
    private router: Router,
    private citiesService: CitiesService,
    private selectedCityService: SelectedCityService,
    private storageCityService: StorageCityService
    ) {}

  ngOnInit(): void {
    this.adminForm = new FormGroup({
      'city': new FormControl(this.storageCityService.getSelectedCity('storedCity') || '', Validators.required),
      'unit': new FormControl(null, Validators.required),
      // 'country': new FormControl(null, [Validators.required, this.onWritingCountryName.bind(this)]),
    });
    this.selectedCityServiceSubscription = this.selectedCityService.selectedCity.subscribe(selectedCityFromService => this.selectedCity = selectedCityFromService);
  }

  ngOnDestroy() {
    this.selectedCityServiceSubscription.unsubscribe();
  }

  // onWritingCountryName(control: FormControl): {[s: string]: boolean} {
  //   // this.availableCountries.indexOf(control.value) ? {'countryIsAvailable': true} : null;
  //   if (this.availableCountries.indexOf(control.value) !== -1) {
  //     return {'countryIsAvailable': true};
  //   }
  //   return null;
  // }

  onSubmit() {
    this.selectedCityService.selectedCity.next(this.adminForm.get('city')?.value);
    this.storageCityService.saveSelectedCity('storedCity', this.selectedCity.toString());
    this.router.navigate(['/']);
  }

}
