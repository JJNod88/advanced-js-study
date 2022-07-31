/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

/** function addTwoNumbers(a, b) {
    return a + b;
}

et sum = addTwoNumbers(3, 5) **/ 


// Arrow Function With Parameters

/** 
const addTwoNumbers = (a, b) => {
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum)

// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(5, 5);
console.log(sum2)

// Implicit Returns

// Returning Multiple Lines
*/




let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1.push(4)
// console.log("Second Arrary:", arr2);

let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7)
// console.log("second array:", arr4);
// console.log("first array:", arr3);


// rest 

const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
//console.log("Sum", sum)

let sum2 = sumAll(1, 2, 3, 4, 5, 6);
//console.log('new sum', sum2)

const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
//console.log('sum 3', sum3)



// destructuring

let ages = [30, 26, 27];
//let john = ages[0];
//let mary = ages [1];
//let paul = ages[2];

//console.log(mary); = 26

let [john, mary, paul] = ages;
//console.log(ages); = less limnes same result as above


const makeList = (arr, student) => {
    let subjects1 = [students];
    for (let i of students); {
        subjects1 += i; 
    }
    return subjects1
}

let [John] = makeList(1, 2)
console.log(makeList)

