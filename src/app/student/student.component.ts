import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  StudentArray: Student[] = [];

  name: string = "";
  email: string = "";
  mobile: Number = 0;

  currentStudentID = "";

  constructor(private http: HttpClient, private router: Router) {
    // this.getAllStudents();
  }

  // getAllStudents() {
  //   this.http.get("http://localhost:8080/api/v1/student/students",
  //   ).subscribe((response: any) => {
  //     console.log("get", response);
  //     this.StudentArray = response;
  //   });
  // }

  register() {
    let bodyData = {
      "name": this.name,
      "email": this.email,
      "mobile": this.mobile
    };

    this.http.post("http://localhost:8080/api/v1/student/create",
      bodyData, {responseType: 'text'}
    ).subscribe((response: any) => {
      console.log(response);
      alert("Student registered successfully!")
      // this.getAllStudents();

      this.router.navigate(['/student/dashboard'])
      this.name = '';
      this.email = '';
      this.mobile = 0;
    });

    
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

  save() {
    if (this.currentStudentID == "") {
      this.register();
    }
    else {
      this.UpdateRecords();
    }
  }

  UpdateRecords() {
    let body = {
      "_id": this.currentStudentID,
      "name": this.name,
      "email": this.email,
      "mobile": this.mobile
    };

    this.http.put("http://localhost:8080/api/v1/student/update/" + this.currentStudentID , body,
      {responseType: 'json'}
    ).subscribe((response) => {
      console.log(response);
      alert("Student data updated successfully!");
      // this.getAllStudents()
      this.name = '';
      this.email = '';
      this.mobile = 0;
    })
  }
}
