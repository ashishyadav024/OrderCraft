import { Component, EventEmitter, Output, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-change-password-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.css']
})
export class ChangePasswordModalComponent {
  @Output() close = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  changePasswordForm: FormGroup = this.fb.group(
    {
      currentPassword: ['', [Validators.required]],
      newPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d).+$/)
        ]
      ],
      confirmNewPassword: ['', [Validators.required]]
    },
    { validators: this.passwordMatchValidator }
  );

  showCurrentPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;

  isLoading = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (!this.isLoading) {
      this.onClose();
    }
  }

  passwordMatchValidator(g: FormGroup) {
    const newPass = g.get('newPassword')?.value;
    const confirmPass = g.get('confirmNewPassword')?.value;
    return newPass === confirmPass ? null : { mismatch: true };
  }

  toggleCurrentPassword(): void {
    this.showCurrentPassword = !this.showCurrentPassword;
  }

  toggleNewPassword(): void {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onClose(): void {
    this.close.emit();
  }

  onSubmit(): void {
    if (this.changePasswordForm.invalid || this.isLoading) {
      this.changePasswordForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;
    this.successMessage = null;

    const { currentPassword, newPassword, confirmNewPassword } = this.changePasswordForm.value;

    this.authService.changePassword({
      currentPassword,
      newPassword,
      confirmNewPassword
    }).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.successMessage = res.message || 'Password changed successfully.';
        this.changePasswordForm.reset();
        setTimeout(() => {
          this.onClose();
        }, 1500);
      },
      error: (err) => {
        this.isLoading = false;
        if (err.error && err.error.message) {
          this.errorMessage = err.error.message;
        } else if (err.error && typeof err.error === 'string') {
          this.errorMessage = err.error;
        } else if (err.status === 400) {
          this.errorMessage = 'Current password is incorrect or new password requirements not met.';
        } else {
          this.errorMessage = 'Unable to change password. Please check your connection and try again.';
        }
      }
    });
  }
}

