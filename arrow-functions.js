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



/** 
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


let nums = [1, 2, 3, 4];
const results = nums.map(nums => nums * 2);
console.log(results)

const people = [
    {
        name: 'Michael',
        age: 23,
    },
    {
        name: 'Liana',
        age: 16,
    },
    {
        name: 'Ben',
        age: 20,
    },
]

const oldEnough = people.filter(people => people.age >= 21);
console.log(oldEnough)

const ben = people.filter(people => people.name == 'Ben')
console.log(ben)

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 84, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 67, english: 87, art: 95},
    }
];

const topMaths = students.filter(itm => itm.results.maths >= 90);
console.log(topMaths);


const numbs = [1, 2, 3, 4];
let sum = numbs.reduce((acc, curr) => acc + curr);
console.log(sum)
// acc = accumulator curr = current value

*/

const teamMembers = [
    {
        name: 'Andrew',
        profession: 'Developer',
        yrsExperience: 5
    },
    {
        name: 'ben',
        profession: 'Developer',
        yrsExperience: 7
    },
    {
        name: 'laura',
        profession: 'designer',
        yrsExperience: 2
    },
    {
        name: 'heather',
        profession: 'designer',
        yrsExperience: 9
    },
];

// totaling an object i.e yrs experience

const totalXp = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalXp)

// grouping properties i.e designer and developer

let xpByProf = teamMembers.reduce((acc, curr) => acc.profession + curr.yrsExperience, 0);
//console.log(xpByProf); // didnt work

let xpByProf2 = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
}, {});
console.log(xpByProf2);
