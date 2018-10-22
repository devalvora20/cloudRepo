import {Customer,Invoice} from './customerClass'
let c1=new Customer("DEVAL","VORA",83928)
console.log("First Name: "+c1.custFirstName)
console.log("Last Name: "+c1.custLastName)
console.log("Phone Number: "+c1.custPhNumber)
let inv1=new Invoice("this is the description.")
console.log("Description: "+inv1.invoiceDescription)