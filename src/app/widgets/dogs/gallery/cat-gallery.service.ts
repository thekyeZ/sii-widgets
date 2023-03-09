import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CatGallery } from '../interfaces/cat';

@Injectable({
  providedIn: 'root'
})
export class CatGalleryService implements OnInit {
  breedsGallery: CatGallery[] = [];
  constructor(
    private httpclient: HttpClient,
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Key': 'live_jXOgphIqar9AzPEa1PPvJgt8d6E7FFmTbGsymBOzFdzZTBxeX0aQRaOO2NMhMwCt'
    })
  }

  getCatGallery() {
    return this.httpclient.get<CatGallery[]>('https://api.thecatapi.com/v1/images/search?limit=1', {
      headers: this.httpOptions.headers
    })
  }

  ngOnInit() { }

}
