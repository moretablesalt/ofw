import { Component } from '@angular/core';

@Component({
  selector: 'app-family-shield-table',
  imports: [],
  templateUrl: './family-shield-table.component.html',
  styleUrl: './family-shield-table.component.css'
})
export class FamilyShieldTableComponent {
  package = 1;

  setPackage(chosenPackage: number) {
    this.package = chosenPackage;
  }

  continue() {

  }
}
