import { Component, inject } from '@angular/core';
import { InsuranceEnvironmentService } from '../../../services/insurance-environment.service';

@Component({
  selector: 'app-plan-selection',
  imports: [],
  templateUrl: './plan-selection.component.html',
  styleUrl: './plan-selection.component.css'
})
export class PlanSelectionComponent {
  public insuranceEnvironmentService = inject(InsuranceEnvironmentService);

  onSelect(env: 'sea' | 'land') {
    this.insuranceEnvironmentService.setEnvironment(env);
  }
}
