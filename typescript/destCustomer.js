"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customerClass_1 = require("./customerClass");
var c1 = new customerClass_1.Customer("DEVAL", "VORA", 83928);
console.log("First Name: " + c1.custFirstName);
console.log("Last Name: " + c1.custLastName);
console.log("Phone Number: " + c1.custPhNumber);
var inv1 = new customerClass_1.Invoice("this is the description.");
console.log("Description: " + inv1.invoiceDescription);
