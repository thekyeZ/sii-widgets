import { Router } from "@angular/router";
import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, NgForm } from "@angular/forms";
import { Exchange } from "../interfaces/Currency";
import { CurrenciesService } from "../services/currenciesList.service";
import { SelectedCurrencyIdService } from "../services/selected-currency-id.service";

@Component({
  selector: "app-currency-admin",
  templateUrl: "./currency-admin.component.html",
  styleUrls: ["./currency-admin.component.scss"],
})
export class CurrencyAdminComponent implements OnInit {
  @Input() exchange!: Exchange[];

  // form: FormGroup = new FormGroup({
  //   username: new FormControl(""),
  // });

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private selectedCurrencyService: SelectedCurrencyIdService,
    private currencyListService: CurrenciesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.form = this.formBuilder.group({
    //   username: [""],
    // });
    this.currencyListService
      .requestCurrencies()
      .subscribe((results) => (this.exchange = results));
    this.selectedCurrencyService.selectedCurrency.subscribe((result) =>
      console.log(result)
    );
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.router.navigate([""]);
    // form.reset();
  }

  // onReset(): void {
  //   this.submitted = false;
  //   this.form.reset();
  // }
}
