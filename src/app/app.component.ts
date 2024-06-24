import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    template: `
    <app-login (loggedIn)="handleLogin($event)"></app-login>
    <app-signup (signedUp)="handleSignup($event)"></app-signup>
  `,
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent]
})
export class AppComponent {
  title = 'kerala-tourism';

  handleLogin(event: boolean) {
    console.log('Logged in:', event);
  }

  handleSignup(event: boolean) {
    console.log('Signed up:', event);
  }
  
}
