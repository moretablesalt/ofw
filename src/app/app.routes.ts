import { Routes } from '@angular/router';
import { quoteGuard } from './guard/quote.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'civil-status',
    loadComponent: () => import('./features/civil-status/civil-status.component').then(m => m.CivilStatusComponent),
    title: 'Policy | OFW Insurance – Prudential Guarantee',
  },
  {
    path: 'policy',
    loadComponent: () => import('./features/policy/policy.component').then(m => m.PolicyComponent),
    title: 'Policy',
    children: [
      {
        path: '',
        redirectTo: 'quote',
        pathMatch: 'full',
      },
      {
        path: 'quote',
        loadComponent: () => import('./features/policy/quote/quote.component').then(m => m.QuoteComponent),
        title: 'Policy | OFW Insurance – Prudential Guarantee',
      },
      {
        path: 'details',
        loadComponent: () => import('./features/policy/details/details.component').then(m => m.DetailsComponent),
        title: 'Policy Details | OFW Insurance – Prudential Guarantee',
        canActivate: [quoteGuard]
      },
      {
        path: 'application-form',
        loadComponent: () => import('./features/policy/application-form/application-form.component').then(m => m.ApplicationFormComponent),
        title: 'Application Form | OFW Insurance – Prudential Guarantee',
        canActivate: [quoteGuard]
      },
      {
        path: 'review',
        loadComponent: () => import('./features/policy/review/review.component').then(m => m.ReviewComponent),
        title: 'Review | OFW Insurance – Prudential Guarantee',
        canActivate: [quoteGuard]
      },
    ]
  },
  {
    path: 'confirmation',
    loadComponent: () => import('./features/confirmation/confirmation.component').then(m => m.ConfirmationComponent),
    title: 'Confirmation | OFW Insurance – Prudential Guarantee',
  },
  {
    path: 'faqs',
    loadComponent: () => import('./features/static/faqs/faqs.component').then(m => m.FaqsComponent),
    title: 'FAQs | OFW Insurance – Prudential Guarantee',
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./features/static/contact-us/contact-us.component').then(m => m.ContactUsComponent),
    title: 'Contact Us | OFW Insurance – Prudential Guarantee',
  },
  {
    path: 'claims',
    loadComponent: () => import('./features/static/claims/claims.component').then(m => m.ClaimsComponent),
    title: 'Claims | OFW Insurance – Prudential Guarantee',
  },
  {
    path: 'learn-more',
    loadComponent: () => import('./features/static/learn-more/learn-more.component').then(m => m.LearnMoreComponent),
    title: 'Learn More | OFW Insurance – Prudential Guarantee',
    children: [
      {
        path: '',
        redirectTo: 'compulsory',
        pathMatch: 'full'
      },
      {
        path: 'compulsory',
        loadComponent: () => import('./features/static/learn-more/compulsory/compulsory.component').then(m => m.CompulsoryComponent),
      },
      {
        path: 'rehires',
        loadComponent: () => import('./features/static/learn-more/rehires/rehires.component').then(m => m.RehiresComponent),
      },
      {
        path: 'family-shield',
        loadComponent: () => import('./features/static/learn-more/family-shield/family-shield.component').then(m => m.FamilyShieldComponent),
      }
    ]
  },
  {
    path: 'terms-and-conditions',
    loadComponent: () => import('./features/static/terms-and-conditions/terms-and-conditions.component').then(m => m.TermsAndConditionsComponent),
    title: 'Terms & Conditions | OFW Insurance – Prudential Guarantee',
  },
];
