import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <div class="header">
      <p routerLink="/">My App</p>
      <nav>
        <p routerLink="/todos">Todos</p>
        <p routerLink="/login">Login</p>
      </nav>
    </div>
  `,
  styles: `.header {
    display: flex;
    width: 100%;
    padding: 0 1rem;
    justify-content: space-between;
    cursor : pointer;
    background : black;
    color : white;
  font-size : 2rem;
  margin : 0
  }
  
  nav{
      display: flex;
      gap: 1rem
  }
  `,
})
export class HeaderComponent {}
