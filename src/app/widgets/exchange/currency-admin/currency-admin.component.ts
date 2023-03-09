import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Exchange } from "../interfaces/Currency";
import { CurrenciesService } from "../services/currenciesList.service";
import { SelectedCurrencyIdService } from "../services/selected-currency-id.service";

@Component({
  selector: "app-currency-admin",
  templateUrl: "./currency-admin.component.html",
  styleUrls: ["./currency-admin.component.scss"],
})
export class CurrencyAdminComponent implements OnInit {
  exchange!: Exchange[];
  currencyForm!: FormGroup;
  currencySelect: string = "";

  submitted = false;

  constructor(
    private selectedCurrencyService: SelectedCurrencyIdService,
    private currencyListService: CurrenciesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currencyForm = new FormGroup({
      pairs: new FormControl(null, [Validators.required]),
    });
    this.currencyListService
      .requestCurrencies()
      .subscribe((results) => (this.exchange = results));
    this.selectedCurrencyService.selectedCurrency.subscribe((result) =>
      console.log(result)
    );
  }

  onSubmit(): void {
    const selectedCurrency = this.currencyForm.get("pairs")?.value;
    if (selectedCurrency) {
      this.selectedCurrencyService.selectedCurrency.next(selectedCurrency);
    }
    this.router.navigate([""]);
  }
}
