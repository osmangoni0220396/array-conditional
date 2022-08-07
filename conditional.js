/*
    ---- Comparison Operator--- 
    <   Less than
    >   Greater Than
    <=  Less than equal
    >=  Greater than equal
    ==  equal
    !=  equal not
    === equal value and equal type
    !== equal not and not equal type
    &&  jodi duita condition ei sign dara thake er mane duita sortoi puron korte hobe
    ||  jodi duita condition ei sign dara thake er mane duitar ekta sorto puron korlei hobe. duita sorto o puron korbe.
*/ 

let iphonePrice = 79000;
let myBudget = 9500;

if(iphonePrice < myBudget){
    console.log("Ami iPhone Kina Felsi");
}
else {
    console.log("Tor Kopale iPhone nai");
}

let chickenPrice = 200;
let iHave = 500;
let getChiken = "Mangsho khamu ar facebooke post dimu";
let notGetChicken = "Tor kopale murgi nai alu vorta kha";
if(chickenPrice > iHave){
    console.log(notGetChicken);
}
else{
    console.log(getChiken);
}
let graduated = true;
let salary = 25000;
let car = 2;
if(graduated == true || salary >= 30000 || car > 0) {
    console.log("Biya Hoibo");
}
else {
    console.log("Muri Kha");
}
let isGraduated = true;
let yourSalary = 25000;
let yourCar = 1;
if(isGraduated == true && (yourSalary >= 30000 || yourCar > 0)) {
    console.log("Biya Hoibo");
}
else {
    console.log("Muri Kha");
}
let myMoney = 450;
let biscuitePrice = 45;
let breadPrice = 35;
let chipsPrice = 20;
let teaPrice = 10;
if (biscuitePrice <= myMoney){
    console.log("Tumi Bisuite Khaw");
}
else if (breadPrice <= myMoney){
    console.log("Tumi Bread khete paro");
}
else if (chipsPrice <= myMoney){
    console.log("Tumi Chips Khete Paro");
}
else if (teaPrice <= myMoney){
    console.log("Tumi Cha Khaw");
}
else {
    console.log("Dokan thika dure jaia bikhkha kor");
}
// Ekta if er vitor ekdhik if likha jay. eke nesting bola hoy.