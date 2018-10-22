import { Component } from '@angular/core';
import { QuestionBankService } from './QuestionBankService';

@Component({
    selector: 'st-questionBank',
    templateUrl: './questionBank.component.html',
})
export class QuestionBankComponent {
    startBtn = false;
    gameOver=false;
    correctAnswers:number=0;
    wrongAnswers:number=0;
    optionBtnDisable = false;
    allQuestions: any = {};
    qtsId: any[] = [];
    question: any;
    options: any[] = [];
    id: any;
    answer: any;
    qtsIndex: number = 0;
    data:any;
    constructor(private _questionBankService: QuestionBankService) { 
    }
    public pieChartLabels:string[] = ['In-Correct', 'Correct', 'Un-answered'];
    public pieChartData:number[] = [3, 2, 0];
    public pieChartType:string = 'pie';
   
    start() {
        this.correctAnswers=0;
        this.wrongAnswers=0;
        this.gameOver=false;
        this.startBtn = true;
        this.generateQuestions();
        let promise = this._questionBankService.loadQuestions();
        promise.then(
            (response) => {
                this.allQuestions = response;
                this.nextQuestion();
            },
            () => console.log("Error!"),
        );
    }
    generateQuestions() {
        let flag = 0;
        let randNum;
        let i = 0;
        while (i < 5) {
            flag = 0;
            randNum = Math.floor(Math.random() * (10) + 1);
            for (let j = 0; j < 5; j++) {
                if (this.qtsId[j] == randNum) {
                    flag = 1; break;
                }
            }
            if (flag == 0) {
                this.qtsId[i++] = randNum;
            }
        }
    }
    nextQuestion() {
        this.optionBtnDisable=false;
        if (this.qtsIndex < 5) {
            this.question = this.allQuestions[this.qtsId[this.qtsIndex] - 1].qt;
            this.options = this.allQuestions[this.qtsId[this.qtsIndex] - 1].op;
            this.answer = this.allQuestions[this.qtsId[this.qtsIndex] - 1].ans;
            this.id = this.allQuestions[this.qtsId[this.qtsIndex++] - 1].id;
        }
        else {
            this.gameFinished();
        }
    }

    checkAns(event) {
        let selectedAns = event.target.attributes.id.nodeValue;
        this.optionBtnDisable = true;
        if (selectedAns == this.answer){
            this.correctAnswers++;
            event.target.classList.add('btn-success');
        }
        else{
            this.wrongAnswers++;
            event.target.classList.add('btn-danger');
        }
    }

    gameFinished(){
        this.question = "";
        this.options = [];
        this.answer = "";
        this.id = "";
        this.startBtn = false;
        this.gameOver=true;
        this.qtsIndex =0;
        this.pieChartData[0]=this.wrongAnswers;
        this.pieChartData[1]=this.correctAnswers;
        this.pieChartData[2]=5-(this.correctAnswers+this.wrongAnswers);
    }
}