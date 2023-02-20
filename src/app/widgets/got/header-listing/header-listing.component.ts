import { Component, Input } from "@angular/core";

@Component({
  selector: "app-header-listing",
  templateUrl: "./header-listing.component.html",
  styleUrls: ["./header-listing.component.scss"],
})
export class HeaderListingComponent {
  @Input() title: string = "";
  // @Input() character: string = "";
}
