import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent,SignupComponent,CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  showLogin: boolean = true;

  toggleForm(): void {
    this.showLogin = !this.showLogin;
  }
}