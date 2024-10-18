// Q1. Add two Numbers---------------------

function AddTwoNumbers(a, b){
    return a + b
}
let a = 2
let b = 5
let res = AddTwoNumbers(a, b);
console.log(res);


// Q2. Find if the conditions are obeyed or not?-------------

function Is_Valid(A, B) {
    return (A < 10) && (A > B);
}
let a = 5
let b = 3
let abc = Is_Valid(a, b);
console.log(abc);


// Q3.Check the conditions-----------------------------

function Check(A, B) {
    if (A % 10 === 0 && B % 10 === 0) {
        return true;
    }
    else if (A % 10 !== 0 && B % 10 !== 0) {
        return false;
    }
    else {
        return true;
    }
}
let A = 12;
let B = 20;
let result = Check(A, B);
console.log(result);  


// Q4.Find the first digit of a 4 digit number-------------------------

function First_Digit(b) {
    return Math.floor(b / 1000);
}
let b = 4567;
let firstDigit = First_Digit(b);
console.log(firstDigit); 


// Q5.Find the last digit of a 4 digit number------------------------

function Last_Digit(a) {
    return Math.floor(a % 10);
}
let a = 4567
let abc = Math.floor(a % 10);
console.log(abc);


// Q6.Find the remainder---------------------------------

function Find_the_remainder(A, B) {
    return B % A;
}
let A = 2;
let B = 9;
let result = Find_the_remainder(A, B);
console.log(result); 


// Q7.Multiply two Numbers----------------------------------

 function Multiply_two_number(a, b) {
    return a * b
 }
 let a = 2
 let b = 5
 let abc = Multiply_two_number(a, b);
 console.log(abc);


// Q8. Marks Calculator---------------------------------

function Sum(A, B, C) {
    return A + B + C;
}
function Average(A, B, C) {
    return (A + B + C) / 3;
}
let A = 50;
let B = 20;
let C = 100;

let totalMarks = Sum(A, B, C);

let averageMarks = Average(A, B, C);

console.log(totalMarks);     
console.log(averageMarks.toFixed(2));  