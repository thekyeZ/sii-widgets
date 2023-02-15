import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent {
loadedFeature='breeds'
 onNavigate(feature: string){
console.log(feature);
this.loadedFeature = feature; 
  }

  constructor(private httpclient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Key':'live_jXOgphIqar9AzPEa1PPvJgt8d6E7FFmTbGsymBOzFdzZTBxeX0aQRaOO2NMhMwCt'
    })
  }
  getBreed(){
    return this.httpclient.get('https://api.thecatapi.com/v1/breeds', {headers: this.httpOptions.headers}).subscribe(breedApi => {
      console.log(breedApi);
      
    })
  } 
}
