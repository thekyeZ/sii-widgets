import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Cat } from "../interfaces/cat";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class BreedService implements OnInit {

  breedsCats: Cat[] = [];

  breedSelected = new BehaviorSubject('abys');

  constructor(
    private httpclient: HttpClient,
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Key': 'live_jXOgphIqar9AzPEa1PPvJgt8d6E7FFmTbGsymBOzFdzZTBxeX0aQRaOO2NMhMwCt'
    })
  }

  ngOnInit() {
  }

  getBreeds() {
    return this.httpclient.get<Cat[]>('https://api.thecatapi.com/v1/breeds', { headers: this.httpOptions.headers 
  }) 
  }

  getBreed(id: string) {
    return this.httpclient.get<Cat>(`https://api.thecatapi.com/v1/breeds/${id}`, { headers: this.httpOptions.headers })

  }

}