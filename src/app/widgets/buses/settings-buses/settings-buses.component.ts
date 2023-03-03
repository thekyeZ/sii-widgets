import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-settings-buses",
  templateUrl: "./settings-buses.component.html",
  styleUrls: ["./settings-buses.component.scss"],
})
export class SettingsBusesComponent {
  @Output() openSettings = new EventEmitter<Event>();

  onOpenSettings(event: Event) {
    this.openSettings.emit(event);
  }
}
