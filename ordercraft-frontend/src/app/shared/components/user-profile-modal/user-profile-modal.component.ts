import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { UserSession } from '../../models/auth.model';

@Component({
  selector: 'app-user-profile-modal',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './user-profile-modal.component.html',
  styleUrls: ['./user-profile-modal.component.css']
})
export class UserProfileModalComponent {
  @Input() user: UserSession | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() openChangePassword = new EventEmitter<void>();

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.onClose();
  }

  onClose(): void {
    this.close.emit();
  }

  onChangePassword(): void {
    this.openChangePassword.emit();
  }
}
