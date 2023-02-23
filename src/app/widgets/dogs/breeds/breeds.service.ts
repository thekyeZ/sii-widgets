import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Cat } from "../interfaces/cat";

@Injectable()
export class BreedService implements OnInit{
  
breedSelected = new EventEmitter<Cat>();

  breedsCats:Cat[]=[];

  constructor(private httpclient: HttpClient) {}
  
  httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Key':'live_jXOgphIqar9AzPEa1PPvJgt8d6E7FFmTbGsymBOzFdzZTBxeX0aQRaOO2NMhMwCt'
      })
    }

  ngOnInit(){this.getBreed()}
  
    getBreed(){
      return this.httpclient.get<Cat[]>('https://api.thecatapi.com/v1/breeds', {headers: this.httpOptions.headers})
  }
  

}