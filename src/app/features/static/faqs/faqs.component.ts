import { Component } from '@angular/core';
import {NzCollapseComponent, NzCollapsePanelComponent} from 'ng-zorro-antd/collapse';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-faqs',
  imports: [
    NzCollapseComponent,
    NzCollapsePanelComponent,
    NgForOf
  ],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  faqs = [
    {
      question: '1. What is the Migrant Workers and Overseas Filipinos Act (MWOFA) of 1995, as amended?',
      answer:
        'This is the law that protects the Overseas Filipinos and Migrant Workers. It provides adequate and timely social, economic and legal services to Filipino migrant workers. It affords protection to labor--organized and unorganized, and promotes full employment and equal employment opportunities.'
    },
    {
      question: '2. Who is an Overseas Filipino Worker (OFW)?',
      answer: `A Filipino Citizen who is about to engage, presently engaged, or engaged in the past in an activity with compensation:

      a.) in another country where he/she is not a citizen;
      b.) on board a vessel navigating foreign seas excluding government ship used for military on non-commercial purposes; or
      c.) on an installation located offshore or on high seas.
      `
    },
    {
      question: '3. What is the difference between an OFW and a migrant worker?',
      answer: 'They mean the same thing. In the context of MWOFA of 1995, as amended, the terms OFW and migrant worker are used interchangeably.'
    },
    {
      question: '4. What is the difference between an agency-hired OFW and a direct-hire OFW or a name-hire OFW?',
      answer: `An OFW is agency-hired if he/she availed the services of a recruitment/manning agency duly authorized by the Department of Labor and Employment (DOLE) through the Philippine Overseas Employment Administration (POEA)

               On the other hand, an OFW is direct-hired or name-hired if he/she was hired directly by foreign employers such as: international organizations; diplomatic corps; and those who were able to get an employment without the assistance or participation of any recruitment/manning agency.`
    },
    {
      question: '5. What is Agency-Hired OFW Compulsory Insurance?',
      answer: 'The Agency-Hired OFW Compulsory Insurance or the Compulsory Insurance Coverage for Agency-Hired Migrant Workers, is an insurance mechanism made available by the law to provide insurance protection for the OFWs.'
    },
    {
      question: '6. Who are covered by the Agency-Hired OFW Compulsory Insurance?',
      answer: 'The Agency-Hired OFW Compulsory Insurance is mandatory for agency-hired OFWs. It is not mandatory for direct-hired, name-hired, or re-hired OFWs. If interested they can also avail of this insurance.'
    },
    {
      question: '7. Is suicide covered by the Agency-Hired OFW Compulsory Insurance?',
      answer: 'Yes. The coverage starts at the enforcement of the insurance coverage. The usual 2-year contestability period in insurance contracts is not applicable for the Agency-Hired OFW Compulsory Insurance.'
    },
    {
      question: '8. What are the valid reasons for claiming the Repatriation Cost Benefit?',
      answer: `The Repatriation Cost Benefit can be claimed when any of the following happens:

              a.) Illegal termination by the insured OFW’s employer – termination of work contract without valid reason;
              b.) Non-payment of salary;
              c.) Maltreatment;
              d.) Overworked;
              e.) Poor living conditions (e.g. no running water in living quarter, no proper bed, etc.);
              f.) Poor working conditions (e.g. non-payment of agreed bonus, no break-time during work hours, etc.); and
              g.) Medical reasons.
              Homesickness, loneliness, laziness, personal problems, criminal offenses and violation of Employer rules are not valid reasons and are not covered by the Repatriation Cost Benefit.`
    },
    {
      question: '9. How to file a claim for Agency-Hired OFW Compulsory Insurance?',
      answer: 'To file a claim, the OFW, the OFW’s recruitment agency, or their beneficiary must contact the Prudential Guarantee at +63 2 8459 4763.  \n' +
        'It is the ultimate responsibility of the recruitment agency to assist the OFW and/or the OFW Beneficiary in claiming the benefits.'
    },
    {
      question: '10. Where can I file a claim for Agency-Hired OFW Compulsory Insurance?',
      answer: 'The OFW or the OFW Beneficiary must notify the recruitment agency of an event covered by the Agency-Hired OFW Compulsory Insurance. If the recruitment agency can’t be contacted, you may call us at +63 2 8459 4763. '
    }
  ];
}
