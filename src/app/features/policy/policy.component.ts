import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {StepsComponent} from '../shared/steps/steps.component';
import {PlanSelectionComponent} from '../shared/plan-selection/plan-selection.component';

@Component({
  selector: 'app-policy',
  imports: [
    RouterOutlet,
    StepsComponent,
    PlanSelectionComponent,
  ],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.css'
})
export class PolicyComponent {
}
