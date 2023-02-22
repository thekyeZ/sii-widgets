import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../interfaces/cat';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent implements OnInit{
@Input() catCat: Cat[]=[];

  ngOnInit(): void {}
  
  title:string = 'breed list';

}
