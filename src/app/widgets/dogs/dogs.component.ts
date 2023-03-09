import { Component, Input, OnInit } from '@angular/core';
import { Cat } from './interfaces/cat';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})

export class DogsComponent implements OnInit {
  breedsCats: Cat[] = [];

  ngOnInit(): void {
  }

}
