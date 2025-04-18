import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    title: 'Home'
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Home'
  },
  {
    path: 'civil-status',
    loadComponent: () => import('./features/civil-status/civil-status.component').then(m => m.CivilStatusComponent),
    title: 'Civil status',
  },
  {
    path: 'policy',
    loadComponent: () => import('./features/policy/policy.component').then(m => m.PolicyComponent),
    title: 'Policy',
    children: [
      {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full',
      },
      {
        path: 'details',
        loadComponent: () => import('./features/policy/details/details.component').then(m => m.DetailsComponent),
        title: 'Policy Details',
      },
      {
        path: 'application-form',
        loadComponent: () => import('./features/policy/application-form/application-form.component').then(m => m.ApplicationFormComponent),
        title: 'Application Form',
      },
      {
        path: 'review',
        loadComponent: () => import('./features/policy/review/review.component').then(m => m.ReviewComponent),
        title: 'Application Form',
      },
    ]
  },
  {
    path: 'confirmation',
    loadComponent: () => import('./features/confirmation/confirmation.component').then(m => m.ConfirmationComponent),
    title: 'Confirmation',
  },
  {
    path: 'faqs',
    loadComponent: () => import('./features/static/faqs/faqs.component').then(m => m.FaqsComponent),
    title: 'FAQs',
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./features/static/contact-us/contact-us.component').then(m => m.ContactUsComponent),
    title: 'Contact Us',
  },
  {
    path: 'claims',
    loadComponent: () => import('./features/static/claims/claims.component').then(m => m.ClaimsComponent),
    title: 'Claims',
  }
];
