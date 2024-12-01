import { Question } from "./question.model";

export class Quiz {
    questions: Question[];
    score: number;
    attempted: boolean;

    constructor(questions: Question[], score: number, attempted: boolean) {
        this.questions = questions;
        this.score = score;
        this.attempted = attempted;

    }
}