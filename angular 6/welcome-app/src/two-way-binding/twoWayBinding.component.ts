import { Component } from '@angular/core';

@Component({
    selector: 'st-twoWay',
    templateUrl: './twoWayBinding.component.html',
})
export class TwoWayComponent {
    customer:ICustomer={firstName:"deval",lastName:"Vora",location:"mumbai"};
    products:String[]=["sprite","mirinda","pepsi"];
    firstNameChange(event):void{
        console.log(event);
        this.customer.firstName=event;
    }
    selectedProduct:String="";
}
interface ICustomer{
firstName:String,
lastName:String,
location:String
}
