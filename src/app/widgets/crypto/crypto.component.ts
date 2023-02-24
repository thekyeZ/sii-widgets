import { Component, OnInit } from '@angular/core';
import { CryptoModel } from './crypto.model';
import { CryptoService } from './crypto.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss'],
})
export class CryptoComponent implements OnInit{

  constructor(private cryptoService: CryptoService){}

crypto: CryptoModel[] = [];

ngOnInit(){
  this.cryptoService.fetchCryptoItem().subscribe(cryptoItems => this.crypto = cryptoItems);
  console.log(this.crypto);
}

}
