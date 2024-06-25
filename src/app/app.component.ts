import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent,LoginComponent,SignupComponent]
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
