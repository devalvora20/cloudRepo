import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'st-star',
    templateUrl: './star.component.html',
})
export class StarComponent implements OnInit{
    count:number=0;
    @Input()
    num:number;
    @Output()
    starHovered:EventEmitter<Object>=new EventEmitter();
    ngOnInit(){
        console.log(this.num);
    }
    hover(){
        this.count++;
        this.starHovered.emit(this.count);
    }
}