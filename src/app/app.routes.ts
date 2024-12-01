import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { ErrorComponent } from './error/error.component';
import { AdminDashboardComponent } from './admin.dashboard/admin.dashboard.component';
import { StudentDashboardComponent } from './student.dashboard/student.dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: '/student', pathMatch: 'full' }, // Default route for the Student page
  { path: 'student', component: StudentComponent }, // Add route for the Student component
  { path: 'admin', component: AdminComponent },  // Add route for the Admin page
  { path: 'login', component: LoginComponent },
  { path: 'quiz', component: QuizComponent}, 
  { path: 'error', component: ErrorComponent},
  { path: 'student/dashboard', component: StudentDashboardComponent},
  { path: 'admin/dashboard', component: AdminDashboardComponent}
];
