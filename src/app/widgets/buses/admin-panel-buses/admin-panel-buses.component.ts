import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel-buses',
  templateUrl: './admin-panel-buses.component.html',
  styleUrls: ['./admin-panel-buses.component.scss']
})
export class AdminPanelBusesComponent {

  constructor(private router: Router) {}

  onCloseSettings() {
    this.router.navigate([""]);
  }
}
