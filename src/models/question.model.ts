export class Question {
    question: string;
    options: string[];
    answer: string;

    constructor(question: string, options: string[], answer: string) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }

      
}