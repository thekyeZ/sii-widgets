import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Cat } from "../interfaces/cat";
import { Subject } from "rxjs-compat";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable()
export class BreedService implements OnInit {

  breedsCats: Cat[] = [];

  breedSelected: BehaviorSubject<Cat> = new BehaviorSubject(this.breedsCats[1]);

  constructor(
    private httpclient: HttpClient,
    ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Key': 'live_jXOgphIqar9AzPEa1PPvJgt8d6E7FFmTbGsymBOzFdzZTBxeX0aQRaOO2NMhMwCt'
    })
  }

  ngOnInit() {}

  getBreed() {
    return this.httpclient.get<Cat[]>('https://api.thecatapi.com/v1/breeds', { headers: this.httpOptions.headers })
  }


}