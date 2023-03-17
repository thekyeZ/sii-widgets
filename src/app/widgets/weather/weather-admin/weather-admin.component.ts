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
    });
    this.selectedCityServiceSubscription = this.selectedCityService.selectedCity.subscribe(selectedCityFromService => this.selectedCity = selectedCityFromService);
  }

  ngOnDestroy() {
    this.selectedCityServiceSubscription.unsubscribe();
  }

  onSubmit() {
    this.selectedCityService.selectedCity.next(this.adminForm.get('city')?.value);
    this.storageCityService.saveSelectedCity('storedCity', this.selectedCity.toString());
    this.router.navigate(['/']);
  }

}
