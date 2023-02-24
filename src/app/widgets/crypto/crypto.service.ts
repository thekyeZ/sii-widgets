import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CryptoModel } from './crypto.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CryptoService{
  crypto: CryptoModel[] = [];
  worstCrypto = []

  constructor(private http: HttpClient) {}

  fetchCryptoItem() {
    return this.http.get<{data: CryptoModel[]}>('https://api.coincap.io/v2/assets')
    .pipe(map(cryptos => {
      return cryptos.data;
    })
    )
  
  };
  
  ngOnInit(){
    this.fetchCryptoItem()
  }

  
}
