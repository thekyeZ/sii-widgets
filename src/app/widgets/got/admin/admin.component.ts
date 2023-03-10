import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SelectedCharacterIdService } from "../services/selected-character-id.service";
// import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({
    number: new FormControl(null, Validators.required),
  });
  constructor(
    private router: Router,
    private selectedCharacterService: SelectedCharacterIdService // private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  onSubmit(): void {
    console.log(this.signupForm.value.number);
    this.selectedCharacterService.selectedCharacterId.next(
      this.signupForm.value.number
    );
    //this.signupForm.reset();
    this.router.navigate(["characters"]);
    if (this.signupForm.value.number >= 10) {
      alert("Please enter a number from range 0 to 9");
      this.router.navigate(["admin/got"]);
    }
  }
  navigateToHome() {
    this.router.navigate([""]);
  }
}
