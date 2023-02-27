import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FooterHttpService1Service {

  constructor(private http: HttpClient) { }

  requestApi() {
   return this.http
      .get<string[]>("https://api.chucknorris.io/jokes/categories")
  }

}






  


  // import { Injectable } from '@angular/core';
  // import { HttpClient } from '@angular/common/http';
  
  // @Injectable({
  //   providedIn: 'root'
  // })
  // export class FooterHttpService1Service {
  //   listOfCategories:string[] = [];
  
  //   constructor(private http: HttpClient) { }
  
  //   requestApi() {
  //    return this.http
  //       .get<string[]>("https://api.chucknorris.io/jokes/categories")
  //       .subscribe((results) => {
  //         this.listOfCategories.push(...results)
  //         console.log(this.listOfCategories);
  //       })
  //     }
      
  //   }
  




