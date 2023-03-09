import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-admin',
  templateUrl: './weather-admin.component.html',
  styleUrls: ['./weather-admin.component.scss']
})
export class WeatherAdminComponent implements OnInit {
  adminForm!: FormGroup;

  constructor(
    private router: Router
    ) {}

  ngOnInit() {
    this.adminForm = new FormGroup({
      'city': new FormControl('Kraków', Validators.required),
      'unit': new FormControl('C', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.adminForm.value);
    this.router.navigate(['/']);
  }

}
