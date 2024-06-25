import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  providers: [DatePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      loginUsername: ['', [Validators.required, Validators.minLength(4)]],
      loginPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
onLogin(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log('Login data:', loginData);
    }
  }
  @Output() switchTo= new EventEmitter<void>();

  toggleLoginSignup() {
    this.switchTo.emit();
  }
}