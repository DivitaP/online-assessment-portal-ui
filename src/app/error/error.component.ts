import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  errorMessage: string = 'An unexpected error occurred. Please try again.';
  errorDetails?: string; // Optional: Use for more specific error info


  constructor(private router: Router) {}

  // Optionally, allow setting the error dynamically
  setError(message: string, details?: string) {
    this.errorMessage = message;
    this.errorDetails = details;
  }

  resetError() {
    this.errorMessage = '';
    this.errorDetails = undefined;

    this.router.navigate(['/login']);
  }
}
