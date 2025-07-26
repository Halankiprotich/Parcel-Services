import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../shared/toast/toast.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  showPassword = false;

  signupData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  };

  constructor(
    private toastService: ToastService,
    private router: Router,
    private http: HttpClient
  ) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    const { firstName, lastName, email, phone, password } = this.signupData;

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !password) {
      this.toastService.showError('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.toastService.showError('Please enter a valid email address');
      return;
    }

    const phoneRegex = /^\d{10,15}$/; // Adjust for international formats if needed
    if (!phoneRegex.test(phone)) {
      this.toastService.showError('Please enter a valid phone number');
      return;
    }

    if (password.length < 8) {
      this.toastService.showError('Password must be at least 8 characters long');
      return;
    }

    // Submit to backend
    this.http.post('http://localhost:3000/auth/signup', this.signupData).subscribe({
      next: (res) => {
        this.toastService.showSuccess('Account created successfully! Welcome to SendIT');
        setTimeout(() => this.router.navigate(['/login']), 1000);
      },
      error: (err) => {
        console.error(err);
        this.toastService.showError(err.error?.message || 'Signup failed');
      }
    });
  }
}
