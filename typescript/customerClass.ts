export class Customer{
    constructor(private firstName:String,private lastName:String,private phNumber:number){

    }
    get custFirstName():String{
        return this.firstName;
    }
    get custLastName():String{
        return this.lastName;
    }
    get custPhNumber():Number{
        return this.phNumber;
    }
}
export class Invoice{
    constructor(private description:String){}

    get invoiceDescription():String{
        return this.description
    }
}