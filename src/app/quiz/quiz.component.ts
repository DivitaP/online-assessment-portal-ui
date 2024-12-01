import { Component, inject, OnInit } from '@angular/core';
// import { QuizService } from './quiz.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];     // Array to store the questions
  userAnswers: number[] = [];     // Array to store the user's selected answers
  score: number = 0;              // To store the score of the quiz
  timer: number = 0;              // Timer for the quiz

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchQuestions();
    this.startTimer();
  }

  // Fetch quiz questions from API
  fetchQuestions() {
    this.http.get('http://localhost:8080/api/v1/quiz/quizzes').subscribe((data: any) => {
      this.questions = data[0]?.questions || []; 
      // sthis.questions = data;
      
      console.log(data)
      console.log(this.questions)
    });
  }

  // Start a timer when the quiz starts
  startTimer() {
    this.timer = 60; // Set timer for 60 seconds (you can adjust this)
    const interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(interval);
        this.calculateResults();  // Automatically calculate results when timer ends
      }
    }, 1000);
  }

  // Handle user's answer selection
  selectAnswer(questionIndex: number, selectedOptionIndex: number) {
    this.userAnswers[questionIndex] = selectedOptionIndex;
  }

  // Calculate the user's score after completing the quiz
  calculateResults() {
    this.score = this.questions.reduce((score, question, index) => {
      const userAnswer = question.options[this.userAnswers[index]];
      console.log("Current Question:", question);
      console.log("User Answer Index:", this.userAnswers[index]);
      console.log("User Answer Value:", question.options[this.userAnswers[index]]);
      return score + (userAnswer === question.answer ? 1 : 0);
    }, 0);
  }
  // Submit the quiz and show the results
  submitQuiz() {
    console.log("user response", this.userAnswers)
    this.calculateResults();
    // Optionally, you can send the score to a backend or show a results page
    alert(`Your score: ${this.score}/${this.questions.length}`);
  }
}
