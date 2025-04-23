import {Component, inject, WritableSignal} from '@angular/core';
import {CounterComponent} from './counter/counter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';
import {QuoteCalculatorService} from '../../../services/quote-calculator.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quote2',
  imports: [
    CounterComponent,
    FormsModule,
    NgIf,
    NzOptionComponent,
    NzSelectComponent,
    ReactiveFormsModule
  ],
  templateUrl: './quote2.component.html',
  styleUrl: './quote2.component.css'
})
export class Quote2Component {
  package1Count = 1;
  package2Count = 1;
  package3Count = 0;
  civilStatus= 'Single';

  private quoteCalculatorService = inject(QuoteCalculatorService);
  private router = inject(Router);

  generateQuote() {
    this.quoteCalculatorService.setQuote(100);
    this.router.navigate(['/policy/details']);
  }
}
