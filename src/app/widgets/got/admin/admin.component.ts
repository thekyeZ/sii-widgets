import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SelectedCharacterIdService } from "../services/selected-character-id.service";
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent {
  genders = ["male", "female", "non-binary"];
  signupForm: FormGroup = new FormGroup({
    userName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    number: new FormControl(null, Validators.required),
    gender: new FormControl("male"),
  });
  constructor(
    private router: Router,
    private selectedCharacterService: SelectedCharacterIdService
  ) {}

  onSubmit(): void {
    console.log(this.signupForm.value.number);
    this.selectedCharacterService.selectedCharacterId.next(
      this.signupForm.value.number
    );
  }
  navigateToHome() {
    this.router.navigate([""]);
  }
}
