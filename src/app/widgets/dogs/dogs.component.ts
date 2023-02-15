import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}
}
