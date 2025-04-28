import { Component } from '@angular/core';
import {NzCollapseComponent, NzCollapsePanelComponent} from 'ng-zorro-antd/collapse';

@Component({
  selector: 'app-privacy-policy',
  imports: [
    NzCollapseComponent,
    NzCollapsePanelComponent
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {
  policySections = [
    { title: '1. Statement of Policy',
      content: `
        <p>
          <span class="highlight">PRUDENTIAL GUARANTEE AND ASSURANCE INC.(PGAI)</span>
          firmly <strong">believes in your right to privacy</strong> and we are <strong>committed to protecting it all throughout our dealings with you.</strong>
          Whenever we ask you to provide your personal data in the course of any business, transaction, or engagement with us,
          we will be clear as to why we need them and shall ensure that they are kept confidential while they are under our control or custody.
          Your information will only be used in accordance with our Privacy Policy and all applicable data protection laws, rules and regulations.
        </p>`
    },
    {
      title: '2. Information we collect, acquire or generate',
      content: `
    <p>When we transact or enter into any engagement with you, you may collect, acquire, generate, or process data that will enable us to deliver our products and services...</p>

    <p><strong>A. Information you provide us and/or we generate during your application or at the start of our engagement, such as:</strong></p>
    <p>
      (1) your resume or CV, previous and/or relevant work experience, education, transcripts, and other similar data; <br>
      (2) sensitive personal information such as race, age, gender, marital status, educational background, religious affiliation, NBI clearance, and government-issued identification numbers; <br>
      (3) employment or work history, technical skills, professional certifications and registrations, language capabilities, and training records; <br>
      (4) information from interviews and phone-screenings you may have had; <br>
      (5) financial details, such as bank account and card details; <br>
      (6) beneficiary and emergency contact information; <br>
      (7) forms and information relating to an application for, or in respect of changes to, employee health and welfare benefits, including short and long-term disability, medical and dental care, etc.
    </p>

    <p><strong>B. Information we collect or generate in the course of your employment and/or our engagement, including the following:</strong></p>
    <p>
      (1) payroll information, banking details, and other financial data; <br>
      (2) records of absences, vacation/paid time off, entitlement and requests, salary history and expectations, performance appraisals, letters of appreciation and commendation, and disciplinary and grievance procedures; <br>
      (3) where applicable and permitted by law, results of credit and criminal background checks, drug and alcohol testing, screening, health certifications, driver's license number, vehicle registration and driving history; <br>
      (4) information necessary for us to comply with applicable laws, court orders or lawful requests and/or directions of public authorities; <br>
      (5) information captured on security systems, including Closed Circuit Television (CCTV) and key card entry systems; <br>
      (6) voicemails, emails, correspondence, documents, and other work product and communications created, stored, or transmitted using our networks, applications, devices, computers or communication equipment; <br>
      (7) references and interview notes; <br>
      (8) retirement account information.
    </p>

    <p><strong>C. Unsolicited information</strong> — if we receive personal information not requested by us, we will determine if it can be kept based on legitimate reasons. Otherwise, it will be securely disposed of.</p>

    <p>If you provide us with personal data of another individual, you confirm that you have the authority to do so or that you have already obtained the necessary consent as required by law.</p>

    <p>Our website and other web portals may use cookies to enhance user experience. Cookie settings may be changed at any time.</p>
  `
    },
    {
      title: '3. How we use your information',
      content: `
    <p>We use your personal data primarily to fulfill the purpose or objective for which they were collected or generated. We also process them to pursue our legitimate interests and for other purposes required or allowed by law. Depending on the data involved, such uses include:</p>

    <p>
      a. determining the insurability of a risk; <br>
      b. issuance of the appropriate policy cover; <br>
      c. collection of premium receivables from insured and intermediaries; <br>
      d. maintenance of client information; <br>
      e. drafting of policy proposals; <br>
      f. underwriting purposes; <br>
      g. risk assessment and statistics; <br>
      h. preparation of terms of reference and quotations; <br>
      i. processing, evaluation, and settlement of claims; <br>
      j. recovery and subrogation; <br>
      k. e-clerking and record keeping; <br>
      l. tracking the history of claim process flows; <br>
      m. damage assessment relative to a claim; <br>
      n. identity verification and validation; <br>
      o. review, assessment and processing of insurance policy applications; <br>
      p. completion of certain transactions (e.g., processing of insurance payments); <br>
      q. sending of administrative information and other client correspondences; <br>
      r. direct marketing for new and renewal businesses; <br>
      s. conduct of audits and surveys; <br>
      t. data analysis and market research; <br>
      u. product development or enhancement; <br>
      v. service improvement or modifications; <br>
      w. carrying out of due diligence or other screening activities; <br>
      x. enforcement of our terms of service and privacy notices; <br>
      y. other necessary or appropriate actions, such as fraud investigations, compliance with legal processes or information requests from public authorities, protection of our rights, properties, and operations, or those of our affiliates, and pursuit of available remedies under the law.
      z. recruitment and applicant evaluation; <br>
      aa. briefing during license application; <br>
      ab. creation, updating and deletion of corporate email accounts; <br>
      ac. workforce administration, payroll, compensation and benefit programs; <br>
      ad. performance management, learning and development; <br>
      ae. management of all aspects of an employer-employee relationship; <br>
      af. completion of certain transactions; <br>
      ag. maintenance of employee directories; maintenance of emergency contacts and beneficiary details; <br>
      ah. administration of our occupational safety and health programs; <br>
      ai. dissemination of administrative information; <br>
      aj. employee engagement programs, including surveys; <br>
      ak. safety and security maintenance for our workforce, guests, properties, and other assets; <br>
      al. taking necessary or appropriate actions:<br>
      (1) to investigate, prevent, or detect illegal activities; <br>
      (2) to comply with legal processes; <br>
      (3) to respond to requests from public authorities; <br>
      (4) to enforce our policies; <br>
      (5) to protect our operations or those of our affiliates; <br>
      (6) to protect our rights and properties, including that of our affiliates and others; and <br>
      (7) to allow us to pursue available remedies; <br>
      am. other purposes that form part of our business activities; <br>
      an. other uses specifically disclosed at the time we request for your information.
    </p>

    <p>Whenever we require your consent for any specific use of your personal data, we will secure it at the appropriate opportunity. You may withdraw your consent at any time, unless otherwise provided by law. In all cases, our use of your personal data will not be excessive.</p>
  `
    },
    {
      title: '4. How we share, disclose or transfer your information',
      content: `
    <p>We do not disclose your personal data to third parties, except as required or permitted by law. Generally, in the course of our operations or business practices, we may share, disclose, or transfer information we collect to the following types of third parties for the reasons described:</p>

    <p>
      a. third-party entities, to perform a business, professional, or insurance function for us; <br>
      b. the Insurance Commission (IC), for regulatory or statistical purposes, the Anti-Money Laundering Council (AMLC), in the case of Covered Transaction Reports (CTR) and Suspicious Transaction Reports (STR), the Credit Information Corporation (CIC), to determine your payment behavior and creditworthiness, and any other government entity designated by law with the power to acquire or process your personal information; <br>
      c. insurance companies, agents, brokers, insurance underwriters or insurers to detect or prevent fraud, criminal activity or misrepresentation in connection with an insurance transaction; <br>
      d. insurance companies, agents, brokers, contractors, service providers, third-party administrators, loss adjusters, surveyors, assessors, private investigators, motor workshops, emergency providers, retailers, medical providers and travel carriers to perform a function in connection with an insurance transaction; <br>
      e. medical care providers to verify coverage of benefits; <br>
      f. government regulatory authority, law enforcement or other governmental authority to prevent or prosecute fraud, or if we believe you have conducted illegal activities; <br>
      g. in cases of group insurance, the policyholder for the purpose of reporting claims experience; <br>
      h. agents, contractors, or third-party service providers who engage to provide us with services such as data processing, communications, telecommunications, telemarketing, customer relationship management, information technology, data entry or processing, storage, printing, distribution, payment, training, auditing or other similar services that assist recovery and business continuity; <br>
      i. other financial services companies with whom we have joint marketing agreements; <br>
      j. underwriters, insurance partners, and reinsurers; <br>
      k. debt collection agencies; <br>
      l. any other party you authorize us to disclose your personal data to; <br>
      m. third parties we engage in connection with the operation of our business, including those critical to our ability to provide benefits and services to our personnel. They include human resources information systems, financial investment service providers, wellness program service providers and insurance providers; <br>
      n. other companies, in the course of our purchase or sale of businesses and other assets where employee information is included as one of the business assets to be transferred; <br>
      o. courts, administrative agencies or government tribunals, when so required by law, or by a lawful order or directive (including responding to a lawful request by public authorities in the interest of public safety, national security or the general welfare of the public); <br>
      p. lawyers and other professionals during consultations or in giving advice; <br>
      q. service providers, to facilitate the delivery of our products or services, to provide a service on our behalf, to perform service-related services or to assist us in analyzing how our services are used; <br>
      r. and other entities or persons, if we determine it to be necessary or desirable to comply with the law or to protect or defend our rights or interests.
    </p>

    <p>In some cases, we may need to obtain your express consent. In line with the preceding section, we will secure your consent at the appropriate time, in accordance with the conditions provided by law. We require entities or persons we share information with to use or disclose such information in a manner consistent with the provisions of this Privacy Policy and all applicable laws.</p>

    <p>We may entrust the processing of your personal data to third-party entities and/or individuals only to the extent necessary in order to accomplish the purposes of their collection and use. We regularly conduct the necessary and appropriate review of our existing contractors. Among others, we may share the services of third-party providers for the following reasons:</p>

    <p>
      a. to facilitate the delivery of our services and/or products; <br>
      b. to develop a product or provide a service on our behalf; <br>
      c. to perform service-related tasks; <br>
      d. or to assist us in analyzing how our services are used.
    </p>

    <p>We ensure that their third-party service providers are also compliant with the Data Privacy Act of 2012 (DPA) when handling, using, or accessing your personal data.</p>
  `
    },
    {
      title: '5. How we store and retain your information',
      content: `
    <p>Your personal data is stored and transmitted securely in a variety of paper and electronic formats. Access to them is restricted to individuals, such as our employees and representatives, who have a legitimate interest in having such access for the purpose of carrying out their contractual and legal duties, such as providing you with our products and services. We require these individuals to ensure the protection and confidentiality of your data at all times. We also maintain physical, electronic and procedural security measures which are at par with applicable regulatory standards.</p>

    <p>Unless otherwise provided or allowed by law, we intend to retain your personal data for as long as they are necessary to achieve the purpose for their collection. After which, they will be disposed of properly and securely. In some cases, data may be retained for further processing but only after they have been aggregated or completely anonymized, to prevent any attempt to identify specific individuals using the retained data.</p>
  `
    },
    {
      title: '6. Your rights with respect to your personal data',
      content: `
    <p>We recognize your rights with respect to your personal data, as provided under the DPA. If you decide to exercise any of your rights, we will consider your action and address the same in accordance with the law. Should you have any concern or questions regarding your rights, this Privacy Policy, or any matter involving PGAI and data privacy, you may contact our Data Protection Officer (DPO) at contact no.: <strong>8878-3000 loc. 7284</strong>.</p>
  `
    },
    {
      title: '7. Amendments of the privacy policy',
      content: `
    <p>We review our Privacy Policy regularly. We may update this Privacy Policy from time to time to take into account changes in our business, operations and the laws or policies we are required to comply with. We will notify you of any changes by posting the revised or new Privacy Policy on our website and/or through other means of communication. These changes are effective immediately, after they are posted.</p>
  `
    },
    {
      title: '8. Other company policies and separability clause',
      content: `
    <p>Our other policies which are not inconsistent with this Privacy Policy will continue to apply. If any part of hereof is found to be unenforceable or declared null and void, the remaining portion not affected thereby shall continue to be in effect.</p>
  `
    }
  ];
}
