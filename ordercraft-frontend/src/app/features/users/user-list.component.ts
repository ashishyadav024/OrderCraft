import { Component, OnInit, inject, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { timeout, finalize } from 'rxjs';
import { Navbar } from '../../shared/components/navbar/navbar';
import { UserService } from '../../core/services/user.service';
import { UserResponse } from '../../shared/models/auth.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    Navbar
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private userService = inject(UserService);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private ngZone = inject(NgZone);

  users: UserResponse[] = [];
  filteredUsers: UserResponse[] = [];

  displayedColumns: string[] = ['username', 'role', 'status', 'actions'];
  isLoading = true;
  errorMessage = '';
  searchTerm = '';
  roleFilter = 'ALL';

  isModalOpen = false;
  userForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['SALES', Validators.required]
  });

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.userService.getAll().pipe(
      timeout(10000),
      finalize(() => { this.ngZone.run(() => { this.isLoading = false; this.cdr.detectChanges(); }); })
    ).subscribe({
      next: (data) => {
        this.ngZone.run(() => { this.users = data || []; this.applyFilter(); this.isLoading = false; this.cdr.detectChanges(); });
      },
      error: () => {
        this.ngZone.run(() => { this.errorMessage = 'Failed to load users. Please check connection and retry.'; this.isLoading = false; this.cdr.detectChanges(); });
      }
    });
  }

  applyFilter(): void {
    let result = [...this.users];

    if (this.roleFilter !== 'ALL') {
      result = result.filter((u) => u.role === this.roleFilter);
    }

    if (this.searchTerm.trim()) {
      const q = this.searchTerm.toLowerCase();
      result = result.filter(
        (u) => u.username.toLowerCase().includes(q) || u.role.toLowerCase().includes(q)
      );
    }

    this.filteredUsers = result;
  }

  setRoleFilter(role: string): void {
    this.roleFilter = role;
    this.applyFilter();
  }

  toggleEnabled(user: UserResponse): void {
    const newVal = !user.enabled;
    this.userService.setEnabled(user.id, newVal).subscribe(() => {
      user.enabled = newVal;
    });
  }

  openCreateModal(): void {
    this.userForm.reset({ username: '', password: '', role: 'SALES' });
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  saveUser(): void {
    if (this.userForm.invalid) return;
    const val = this.userForm.value;

    this.userService
      .create({
        username: val.username || '',
        password: val.password || '',
        role: val.role || 'SALES'
      })
      .subscribe(() => {
        this.closeModal();
        this.fetchUsers();
      });
  }
}

