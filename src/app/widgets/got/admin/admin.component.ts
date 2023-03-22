import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";
import { SelectedCharacterIdService } from "../services/selected-character-id.service";
import { LocalService } from "../services/local.service";

export function allowedColorValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const allowed = !nameRe.test(control.value);
    return allowed ? { allowedColor: { value: control.value } } : null;
  };
}
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({
    number: new FormControl(null || this.localStore.getData("id"), [
      Validators.required,
      Validators.max(9),
      Validators.min(0),
    ]),
    color: new FormControl("", [
      Validators.required,
      allowedColorValidator(/blue|green|red/i),
    ]),
  });
  constructor(
    private router: Router,
    private selectedCharacterService: SelectedCharacterIdService,
    private localStore: LocalService
  ) {}

  ngOnInit(): void {}
  onSubmit(): void {
    console.log(this.signupForm.value.number);
    this.selectedCharacterService.selectedCharacterId.next(
      this.signupForm.value.number
    );
    this.localStore.saveData("id", this.signupForm.value.number);
    console.log("Data from local storage: ", this.localStore.getData("id"));
    //this.signupForm.reset();
    this.router.navigate(["characters"]);
  }
  navigateToHome() {
    this.router.navigate([""]);
  }
}
