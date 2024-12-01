import { Quiz } from "./quiz.model";

export class Student {
    [x: string]: any;
    name: string;
    email: string;
    mobile: Number;
    attemptedQuiz ?: Quiz;


    constructor(name: string, email: string, mobile: Number, attemptedQuiz ?: Quiz) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.attemptedQuiz = attemptedQuiz;
    }
}