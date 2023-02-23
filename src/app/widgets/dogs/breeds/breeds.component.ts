
import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../interfaces/cat';
import { BreedService } from './breeds.service';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss'],
  providers: [BreedService],
})
export class BreedsComponent{

  title:string = 'breed list';
  
}
