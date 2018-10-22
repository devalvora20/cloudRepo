import { Component } from '@angular/core';

@Component({
    selector: 'st-blueButton',
    templateUrl: './blueButtonGame.component.html',
})
export class BlueButtonGame {
    blueButton: number;
    reset: boolean;
    i: number;
    msg:String;
    attempts: number = 4;
    btnStyle: any[25] = [];
    disable:boolean;
    constructor() {
        this.reset = false;
        this.disable=false;
        this.blueButton = Math.floor(Math.random() * (25) + 1);
        for (this.i = 0; this.i <= 25; this.i++) {
            this.btnStyle[this.i] = { 'background-color': 'grey', color:'white'};
        }
    }

    buttons: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    buttonClick(id: number): void {
        this.btnStyle[id] = {
            'background-color': id > this.blueButton ? 'green' : id == this.blueButton ? 'blue' : 'red',
            'pointer-events': 'none',
            'color':'white'
        };
        this.attempts--;
        if(id==this.blueButton){
            this.msg="YOU WIN!";
            this.reset = true;
            return;
        }
        if (this.attempts == 0) {
            this.msg="game over you lose!";
            this.reset = true
            this.disable=true;
            this.btnStyle[this.blueButton]={
                'background-color':'blue',
                'color':'white'
            }
            return;
        }
        
    }
    resetClick(): void {
        window.location.reload();
    }
}