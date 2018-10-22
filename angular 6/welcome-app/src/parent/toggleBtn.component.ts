import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'st-toggleBtn',
    templateUrl: './toggleBtn.component.html',
})
export class ToggleBtnComponent implements OnInit{
    isOn:boolean=false;
    bgStyle = {};
    @Input()
    onColor:String;
    @Input()
    offColor:String;
    @Input()
    textContent:String;
    @Output()
    stateChanged:EventEmitter<Object>=new EventEmitter();
    constructor(){
        console.log("This is Constructor textContent: "+this.textContent);
    }
    ngOnInit(){
        console.log("This is on init textContent: "+this.textContent);
    }
    toggle(){
        
        if(this.isOn){
            this.bgStyle={ 'background-color': this.onColor};
            this.isOn=!this.isOn;
        }
        else{
            this.bgStyle={ 'background-color': this.offColor};
            this.isOn=!this.isOn;
        }
        let obj:any={"previousState":!this.isOn,"newState":this.isOn};
        this.stateChanged.emit(obj);
    }    
}