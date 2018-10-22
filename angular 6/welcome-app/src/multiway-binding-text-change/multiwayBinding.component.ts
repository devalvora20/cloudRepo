import { Component } from '@angular/core';

@Component({
    selector: 'st-multiwayBinding',
    templateUrl: './multiwayBinding.component.html',
})
export class MultiwayBindingComponent {
    customStyle = {};
    name:String;
    color:String;
    bgColor:String;
    size:String;
    col:String;
    cols:String[]=["red","green","blue","yellow"];
    bg:String;
    bgs:String[]=["red","green","blue","yellow"];
    colorChange(event){
        this.customStyle={'color':this.col,'background-color':this.bg,'font-size': this.size+'px'};
    }
    bgColorChange(event1){
        this.customStyle={'color':this.col,'background-color':this.bg,'font-size': this.size+'px'};
    }
    fontChange(event2){
        this.customStyle={'color':this.color,'background-color':this.bgColor,'font-size': this.size+'px'};
    }
}
