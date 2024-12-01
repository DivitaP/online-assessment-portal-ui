import { Component } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentComponent } from '../student/student.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  StudentArray: Student[] = [];

  constructor(private http: HttpClient) {
    this.getAllStudents();
  }

  ngOnInit() {
    
  }

  getAllStudents() {
    this.http.get("http://localhost:8080/api/v1/admin/students",
    ).subscribe((response: any) => {
      console.log("get", response);
      this.StudentArray = response;
    });
  }

  selectedStudents: { [key: string]: boolean } = {};  // Tracks selected state

  selectAll: boolean = false;

  toggleAllSelections() {
    this.StudentArray.forEach(student => {
      this.selectedStudents[student.email] = this.selectAll;
    });
  }

  updateSelectAllStatus() {
    this.selectAll = this.StudentArray.every(student => this.selectedStudents[student.email]);
  }

  generateOTP() {
    console.log(this.selectedStudents)
    for (const email in this.selectedStudents) {
      this.http.post("http://localhost:8080/api/v1/otp/generate-otp?email=" + email, {responseType: 'text'}).subscribe((response) => {
        console.log(response)
      })
    }
  }


  // setUpdate(data: any) {
  //   this.name = data.name;
  //   this.email = data.email;
  //   this.mobile = data.mobile;
  //   this.currentStudentID = data._id;
  // }

  // setDelete(data: any) {
  //   this.http.delete("http://localhost:8080/api/v1/student/delete/" + data._id, {responseType: 'text'}).subscribe((response) => {
  //     console.log("delete", response);
  //     alert("Student deleted from database!");
  //     this.getAllStudents();
  //     this.name = '';
  //     this.email = '';
  //     this.mobile = 0;
  //   });
  // }
}
