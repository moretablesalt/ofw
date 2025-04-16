import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-civil-status',
  imports: [],
  templateUrl: './civil-status.component.html',
  styleUrl: './civil-status.component.css'
})
export class CivilStatusComponent {

  private router = inject(Router);

  continue() {
    this.router.navigate(['/policy/details']);
  }
}
