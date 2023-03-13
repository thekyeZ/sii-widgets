import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { selectedMemService } from "../../services/selectedMemObservable.service";
import { allowedUsernames } from "./utils/categoryNameTable";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  simpleForm?: FormGroup;
  submitted: boolean = false;
  user?: { id?: string; category?: string };

  ngOnInit() {
    this.simpleForm = new FormGroup({
      categoryName: new FormControl<string>("", [
        Validators.required,
        this.allowedNames.bind(this),
        this.noSpaceAllowed.bind(this),
      ]),
    });
    this.user = {
      id: this.route.snapshot.params["id"],
      category: this.route.snapshot.params["category"],
    };
  }

  //Validators
  allowedNames(control: FormControl) {
    if (allowedUsernames.indexOf(control.value) === -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(" ") != -1) {
      return { noSpaceAllowed: true };
    }
    return null;
  }

  //Buttons
  onSubmit() {
    this.submitted = true;

    if (this.simpleForm?.invalid) {
      return;
    } else {
      this.selectedMemService.selectedCategory.next(
        this.simpleForm?.get("categoryName")?.value
      );
      console.log(this.simpleForm);
      console.log(this.simpleForm?.value);
      // this.simpleForm?.reset();
    }
  }

  //Navigation links
  navigateToMainPage() {
    this.router.navigate([""]);
  }

  //Constructor
  constructor(
    private router: Router,
    private selectedMemService: selectedMemService,

    private route: ActivatedRoute
  ) {}
}
