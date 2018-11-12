import React, { Component } from 'react';
import QuestionBankService from './questionBankService';
import PieChart from 'react-minimal-pie-chart';
export default class QuestionBankComponent extends Component {
    _service;
    qtsId = [];
    allQuestions = [];
    currentQuestion;
    optionClicked = false;
    correctAns;
    wrongAns;
    btn = [];
    btnStyle = [];

    constructor() {
        super();
        this.correctAns = 0;
        this.wrongAns = 0;
        this.currentQuestion = 0;
        this._service = new QuestionBankService();
        this.state = {
            gameOver: true,
            question: "",
            options: [],
            ans: "",
            optionClicked: false,
            btnStyle: [null, null, null, null],
            result: true,
            data: [
            ]
        };
    }
    start = () => {
        this.correctAns = 0;
        this.wrongAns = 0;
        this.setState({
            gameOver: false,
            result: true,
            data:[]
        })
        this.generateQuestions();
        this._service.loadQuestions(this.questions.bind(this));
    }
    nextQuestion = () => {
        this.i = 0;
        this.setState({ optionClicked: false });
        if (this.currentQuestion < 5) {
            this.setState({
                question: this.allQuestions[this.qtsId[this.currentQuestion] - 1].qt,
                options: this.allQuestions[this.qtsId[this.currentQuestion] - 1].op,
                ans: this.allQuestions[this.qtsId[this.currentQuestion++] - 1].ans,
                btnStyle: []
            });
        }
        else {
            let data1=[
                { title: 'Correct', value: this.correctAns, color: 'green' },
                { title: 'Incorrect', value: this.wrongAns, color: 'red' },
                { title: 'Unanswered', value: 5-(this.wrongAns+this.correctAns), color: 'grey' },
            ]
            this.currentQuestion = 0;
            this.setState({
                gameOver: true,
                question: "",
                result: false,
                data:data1
            })
        }
    }
    questions(data) {
        this.allQuestions = data;
        this.nextQuestion();
    }
    generateQuestions() {
        let flag = 0;
        let randNum;
        let i = 0;
        while (i < 5) {
            flag = 0;
            randNum = Math.floor(Math.random() * (10) + 1);
            for (let j = 0; j < 5; j++) {
                if (this.qtsId[j] === randNum) {
                    flag = 1; break;
                }
            }
            if (flag === 0) {
                this.qtsId[i++] = randNum;
            }
        }
    }
    checkAns = (ans) => {
        this.setState({ optionClicked: true });
        ans++;
        let optnStyle = this.state.btnStyle;
        if (this.state.ans === ans.toString()) {
            optnStyle[ans - 1] = 'green';
            this.correctAns++;
        }
        else {
            optnStyle[ans - 1] = 'red';
            this.wrongAns++;
        }
        optnStyle[this.state.ans - 1] = 'green';
        this.setState({
            btnStyle: optnStyle
        });
    }
    
    render() {

        if (this.allQuestions.length === 0) {
            var options = [];
        }
        else {
            options = this.state.options.map(function (op1, index) {
                return (
                    <span>
                        <button hidden={this.state.gameOver} style={{ backgroundColor: this.state.btnStyle[index] }} disabled={this.state.optionClicked} className='btn btn-primary' onClick={() => { this.checkAns(index) }}>{op1}</button>&nbsp;
                </span>
                );
            }.bind(this));
        }
        var jsx = (<div style={{ textAlign: 'center' }}>

            <button hidden={!this.state.gameOver} className='btn btn-primary' onClick={this.start}>{this.state.result ? 'Start' : 'Restart'}</button>
            <h3>{this.state.question}</h3><br />
            {options}
            <br /><br />
            <button hidden={this.state.gameOver} className='btn btn-success' onClick={this.nextQuestion}>Next Question</button>
            <h4 hidden={this.state.result}>Game Over!</h4><br />
            <h4 hidden={this.state.result}>Right answers:<b style={{color:'green'}}> {this.correctAns}</b></h4><br />
            <h4 hidden={this.state.result}>Wrong answers:<b style={{color:'red'}}> {this.wrongAns}</b></h4><br />
            <h4 hidden={this.state.result}>Unanswered Qt:<b style={{color:'grey'}}> {5 - (this.wrongAns + this.correctAns)}</b></h4><br/>
            <h3 hidden={this.state.result}>Result:</h3>
            <PieChart
            hidden={this.state.result}
                data={this.state.data}
                radius={30}
                animate
            />
        </div>);
        return jsx;
    }
}