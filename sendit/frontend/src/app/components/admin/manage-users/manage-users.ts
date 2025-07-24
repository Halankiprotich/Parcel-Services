import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'Driver' | 'User';
  status: 'Active' | 'Inactive';
  registered: string;
  avatar: string;
}

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.html',
  styleUrl: './manage-users.css',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule]
})
export class ManageUsers implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  
  // User role for role-based access control
  userRole: string = 'ADMIN'; // Default role for admin component, will be set from auth service later
  
  searchTerm = '';
  selectedStatus = '';
  selectedRole = '';
  users: User[] = [];

  // Pagination
  currentPage = 1;
  usersPerPage = 8;

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.http.get<User[]>('/api/users')
      .pipe(
        catchError(error => {
          console.error('Error fetching users:', error);
          return throwError(() => new Error('Failed to fetch users. Please try again later.'));
        })
      )
      .subscribe(users => {
        this.users = users;
      });
  }

  get filteredUsers(): User[] {
    let filtered = this.users;
    if (this.searchTerm) {
      const search = this.searchTerm.toLowerCase();
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.phone.includes(search)
      );
    }
    if (this.selectedStatus) {
      filtered = filtered.filter(user => user.status === this.selectedStatus);
    }
    if (this.selectedRole) {
      filtered = filtered.filter(user => user.role === this.selectedRole);
    }
    return filtered;
  }

  get paginatedUsers(): User[] {
    const start = (this.currentPage - 1) * this.usersPerPage;
    return this.filteredUsers.slice(start, start + this.usersPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredUsers.length / this.usersPerPage);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedStatus = '';
    this.selectedRole = '';
    this.currentPage = 1;
  }

  viewUserDetails(userId: string) {
    this.router.navigate(['/admin-user-details', userId]);
  }
}