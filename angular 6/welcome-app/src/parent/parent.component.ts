import { Component} from '@angular/core';

@Component({
    selector: 'st-parent',
    templateUrl: './parent.component.html',
})
export class ParentComponent {
    msg:String;
    fn(event){
        console.log(event);
    }

    hovered(event){
        this.msg="The Star is hovered "+event+" times";
    }
}