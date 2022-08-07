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
// let graduated = true;
// let salary = 25000;
// let car = 2;
// if(graduated == true || salary >= 30000 || car > 0) {
//     console.log("Biya Hoibo");
// }
// else {
//     console.log("Muri Kha");
// }
let graduated = true;
let salary = 25000;
let car = 1;
if(graduated == true && (salary >= 30000 || car > 0)) {
    console.log("Biya Hoibo");
}
else {
    console.log("Muri Kha");
}

