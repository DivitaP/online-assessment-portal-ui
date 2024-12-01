import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "";
  otp: string = "";

  constructor(private http: HttpClient, private router: Router) {}

  submit() {
    this.http.post("http://localhost:8080/api/v1/student/login/" 
      + this.email + "/" +  this.otp, {responseType: 'boolean'}
    ).subscribe((response) => {
      console.log(response);
      response = true; // TODO: remove this
      if(response === true) {
        this.router.navigate(['/student/dashboard']);
      } else {
        this.router.navigate(['/error']);
      }
    });
  }
}
