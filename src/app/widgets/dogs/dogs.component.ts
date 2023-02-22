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

  constructor(private httpclient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Key':'live_jXOgphIqar9AzPEa1PPvJgt8d6E7FFmTbGsymBOzFdzZTBxeX0aQRaOO2NMhMwCt'
    })
  }
  ngOnInit(){this.getBreed()}

  getBreed(){
    return this.httpclient.get<Cat[]>('https://api.thecatapi.com/v1/breeds', {headers: this.httpOptions.headers}).subscribe(breedApi => {
console.log(breedApi);

      this.breedsCats = breedApi;
      console.log(this.breedsCats[1].weight);
      
    })
}

}
