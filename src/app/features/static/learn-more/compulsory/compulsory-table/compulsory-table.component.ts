import { Component } from '@angular/core';

@Component({
  selector: 'app-compulsory-table',
  imports: [],
  templateUrl: './compulsory-table.component.html',
  styleUrl: './compulsory-table.component.css'
})
export class CompulsoryTableComponent {
  package = 1;

  setPackage(chosenPackage: number) {
    this.package = chosenPackage;
  }

  continue() {

  }
}
