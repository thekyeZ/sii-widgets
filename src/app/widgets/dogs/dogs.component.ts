import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Cat } from './interfaces/cat';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})

export class DogsComponent implements OnInit {
  breedsCats: Cat[] = [];

  ngOnInit(): void {
  }

  constructor(private router: Router) { }

  navigateToAdmin() {
    this.router.navigate(['cat/catadmin'])

  }
}
