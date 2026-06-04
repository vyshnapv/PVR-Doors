import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'P V R Metals | Precision Engineering & Structural Excellence'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us | P V R Metals'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Services & Fabrication | P V R Metals'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us | P V R Metals'
  },
    {
      path: 'works',
      loadComponent: () => import('./pages/works/works.component').then(m => m.WorksComponent),
      title: 'Our Works | P V R Metals'
    },
    {
      path: '**',
      redirectTo: ''
    }
];
