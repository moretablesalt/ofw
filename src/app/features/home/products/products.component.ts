import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-products',
  imports: [
    CardComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  coverageCards = [
    {
      title: 'Agency-Hired Migrant Workers',
      items: [
        'Accidental Death and Total Permanent Disablement',
        'Natural Death',
        'Financial Assistance Benefits'
      ],
      productDisabled: true,
      planId: 'A',
      learnMoreLink: '/learn-more/compulsory'
    },
    {
      title: 'Rehires and Direct Hires',
      items: [
        'Accidental Death and Total Permanent Disablement',
        'Natural Death',
        'Financial Assistance Benefits'
      ],
      productDisabled: false,
      planId: 'B',
      learnMoreLink: '/learn-more/rehires'
    },
    {
      title: 'OFW and their Family',
      items: [
        'Accidental Death and Total Permanent Disablement',
        'Unprovoked Murder and Assault',
        'Accident Medical Reimbursement',
        'Accident Burial Benefit',
        'Daily Hospital Income'
      ],
      productDisabled: false,
      planId: 'C',
      learnMoreLink: '/learn-more/family-shield'
    }
  ];
}
