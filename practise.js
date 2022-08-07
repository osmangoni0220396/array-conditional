// Question-1: You are given an array-
var fruits = ['Apple', 'Banana', 'Orange'];
// a) Find th eindex of 'Banana' and replace 'Banana' with 'Mango'.
// b) Remove Orange and add Water melon.

// Solution 1(a):
var indexOfBanana = fruits.indexOf('Banana');
console.log(indexOfBanana);
fruits[1] = 'Mango';
console.log(fruits);
// Solution 1(b):
var orrangeRemove = fruits.pop();
console.log(fruits);
var watermelonAdd = fruits.push('Watermelon');
console.log(fruits);

// Question-2: You and freinds Tom, Peter and Jhon got their final exam results. Your total score is 85, Tom's total score is 66, Jane's total score is 95, Peter's total score is 56 and john's total score is 40. The grading chart is 80 or above A grade, 60 or above B grade, 50 or above C grade, 40 or above D grade, 39 or less F grade. Now write a program to find you and your friend's grade using if else.
// Solution 2:
var myNumber = 85;
var tomNumber = 66;
var janeNumber = 95;
var peterNumber = 56;
var johnNumber = 40;
if (myNumber >=80 && myNumber <= 100){
    console.log("I got 'A' Grade");
}
else if (myNumber >=60){
    console.log("I got 'B' Grade");
}
else if (myNumber >=50){
    console.log("I got 'C' Grade");
}
else if (myNumber >=40){
    console.log("I got 'D' Grade");
}
else if (myNumber >0 && myNumber <= 39){
    console.log("I failed in the exam");
}
else {
    console.log("I am not attend in the exam")
}
if (tomNumber >=80 && tomNumber <= 100){
    console.log("Tom got 'A' Grade");
}
else if (tomNumber >=60){
    console.log("Tom got 'B' Grade");
}
else if (tomNumber >=50){
    console.log("Tom got 'C' Grade");
}
else if (tomNumber >=40){
    console.log("Tom got 'D' Grade");
}
else if (tomNumber >0 && tomNumber <= 39){
    console.log("Tom failed in the exam");
}
else {
    console.log("Tom is not attend in the exam")
}
if (janeNumber >=80 && janeNumber <= 100){
    console.log("Jane got 'A' Grade");
}
else if (janeNumber >=60){
    console.log("Jane got 'B' Grade");
}
else if (janeNumber >=50){
    console.log("Jane got 'C' Grade");
}
else if (janeNumber >=40){
    console.log("Jane got 'D' Grade");
}
else if (janeNumber >0 && janeNumber <= 39){
    console.log("Jane failed in the exam");
}
else {
    console.log("Jane is not attend in the exam")
}
if (peterNumber >=80 && peterNumber <= 100){
    console.log("Peter got 'A' Grade");
}
else if (peterNumber >=60){
    console.log("Peter got 'B' Grade");
}
else if (peterNumber >=50){
    console.log("Peter got 'C' Grade");
}
else if (peterNumber >=40){
    console.log("Peter got 'D' Grade");
}
else if (peterNumber >0 && peterNumber <= 39){
    console.log("Peter failed in the exam");
}
else {
    console.log("Peter is not attend in the exam")
}
if (johnNumber >=80 && johnNumber <= 100){
    console.log("Peter got 'A' Grade");
}
else if (johnNumber >=60){
    console.log("John got 'B' Grade");
}
else if (johnNumber >=50){
    console.log("John got 'C' Grade");
}
else if (johnNumber >=40){
    console.log("John got 'D' Grade");
}
else if (johnNumber >0 && johnNumber <= 39){
    console.log("John failed in the exam");
}
else {
    console.log("John is not attend in the exam")
}

// Question 3: Your are given three numbers 13, 79, and 45. Write a program that will print the lrgest number number using if-else.
// Solution -3:
var num1 = 13;
var num2 = 79;
var num3 = 45;
if (num1 > num2 && num1 > num3){
    console.log(num1 + " " +"is the largest number");
}
else if (num2 > num1 && num2 > num3){
    console.log(num2 + " " + "is the largest number")
}
else {
    console.log(num3 + " " + "is the largest number")
}
// Question 4: You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else.
// Solution- 4:
var side1 = 9;
var side2 = 8;
var side3 = 9;
if (side1 == side2 || side1 == side3 || side2 == side3){
    console.log("This triangle is Isosceles");
}
else{
    console.log("This triangle is not Iscosceles");
}