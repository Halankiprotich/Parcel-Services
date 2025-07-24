import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../shared/toast/toast.service';
import { Router, RouterLink } from '@angular/router'; // Add Router here

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  showPassword = false;
  
  
  loginData = {
    email: '',
    password: '',
    rememberMe: false
  };

  constructor(private toastService: ToastService, private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    // Validate form
    if (!this.loginData.email || !this.loginData.password) {
      this.toastService.showError('Please enter your email and password');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.loginData.email)) {
      this.toastService.showError('Please enter a valid email address');
      return;
    }

    console.log('Login data:', this.loginData);
    
    // Simulate API call
    this.toastService.showSuccess('Login successful! Welcome back');
    this.router.navigate(['/user-dashboard']);
    
    // Add your login logic here
    // You can redirect to dashboard after successful login
  }
}
