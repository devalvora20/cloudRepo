import { Component,Input, OnInit} from '@angular/core';

@Component({
    selector: 'st-timestamp',
    templateUrl: './timestamp.component.html',
})
export class TimestampComponent implements OnInit{
    @Input()
    format:String;
    @Input()
    borderThickness:String;
    @Input()
    borderColor:String;
    currentTime;
    border;
    ngOnInit(){
        if(this.borderThickness==null || this.borderThickness=="")
            this.borderThickness="0";
        if(this.borderColor==null || this.borderColor=="")
            this.borderColor="black";
        this.border=""+this.borderThickness+"px solid "+this.borderColor;
        console.log(this.border);
        setInterval(() => {         //replaced function() by ()=>
            this.currentTime=Date.now();
          }, 1000);
    }
}