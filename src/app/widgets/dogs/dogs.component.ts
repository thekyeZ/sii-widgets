import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Cat } from './interfaces/cat';
@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})

export class DogsComponent implements OnInit{
breedsCats:Cat[]=[];

loadedFeature='breeds'
 onNavigate(feature: string){

this.loadedFeature = feature; 
  }
ngOnInit(): void {
  
}

}
