import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'todos',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./todos/todos.component').then((m) => m.TodosComponent);
    },
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./template-form/template-form.component').then(
        (m) => m.TemplateFormComponent
      );
    },
  },
];
