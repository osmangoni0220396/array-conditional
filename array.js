/*
* What is Array?
    Array emon ekti variable jekhane onek gulo value ekshathe rakha jay.
* How to write an Array?
    Array lekhar jonno normal var er shudu value gula third bracket ([]) er moddhe likhte hoy ebong prottek ta value er pore comma dite hoy. Tobe sesh value te comma na dileo chole.
*/
var friends = ["Nadim", "Najim", "Sabbir", "Arif", "Ridoy"];
// array er modhdhe koy ti upadan ase seta janar jonno variable name er sathe .length likhte hoy.
console.log(friends.length);
// Array vitor jegula thake seguluke prottekta ke element ba upadan bole. Array er upadaner counting suru hoy 0 theke. Array er upadaner number ke indexOfArray bola hoy.
// Index dia array er upadan axas kora jay.
// Kono ekta array er index number diye array er upadan ber korte hole variable number ebong third braket e index Number likhte hoy.
console.log(friends);
// console.log(friends[2]);
// array er element change korte array er name likhe third bracket e index number likhe equal sign dite new element likhte hoy.
friends[0] = "Good Boy";
console.log(friends);
// Kono ekta upadan dia er index number ber korte value er name er pore dot indexOf ebong first bracket er vitor upadaner nam likhte hoy. Ekhetre element number hole qutation lage na kintu string hole qutation lage.
console.log(friends.indexOf("Sabbir"))
// Kono array te push korle seshe element jog hoy ebong pop korle sesher ta bad hoye jay. Abar jodi pop kono variable e rakha hoy tobe sei variable er value hobe array sesh upadan.
friends.push("Sahin");
console.log(friends);
var popElement = friends.pop();
console.log(friends);
console.log(popElement);
// kono arry te shift korle prothom element vanish hoye jay ebong unshift korle prothome element jog hoy.Abar jodi shift kono variable e rakha hoy tobe sei variable er value hobe array prothom upadan.
var friends1 = friends.shift();
console.log(friends1, friends);
friends.unshift("Habib");
console.log(friends);
// kono ekta array er selected index number er element bad dite slice babohar korte hoy
console.log(friends.slice(2))
