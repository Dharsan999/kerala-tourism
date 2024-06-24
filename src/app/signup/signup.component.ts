import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  providers: [DatePipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  @Output() toggleForm = new EventEmitter<void>();
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, this.matchPassword.bind(this)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      dob: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      console.log('Sign up successful', this.signUpForm.value);
    }
  }

  matchPassword(control: any) {
    if (this.signUpForm) {
      return control.value === this.signUpForm.get('password')?.value ? null : { mismatch: true };
    }
    return null;
  }
  switchToLogin(): void {
    this.toggleForm.emit();
  }
}