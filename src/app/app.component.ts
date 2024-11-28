import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>

    <router-outlet />
  `,
  styles: [
    `
      p {
        background-color: red;
      }
    `,
  ],
})
export class AppComponent {
  title = 'first-ng-app';
}
