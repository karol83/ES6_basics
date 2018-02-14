//Lecture: let and cost
/*
// ES 5
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";

console.log(name5)

// ES 6
const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6); --> This produces an error since name6 was const


// ES5

function driversLicence(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
     }
    // var works function scoped
    console.log(firstName + ', born in: '+ yearOfBirth + ' is now officially allowed to drive a car');
    
}

driversLicence(true);

// ES6
function driversLicence6(passedTest) {
    //console.log(firstName); //<--creates error instead of 'undefined'
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        firstName = 'John';
        //let firstName = 'John';
        //const yearOfBirth = 1990;
        
        
    }
    // let works in block scopes !!!
    console.log(firstName + ', born in: '+ yearOfBirth + ' is now officially allowed to drive a car'); // <== this creates and error!
}

driversLicence6(true);


let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);




///////////////////////////////////////////////
// Lecture: Blocks and IIFEs

{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a+b); // <-- these values are 'private' - not able to access them
console.log(c); // <-- this still works - it's function scoped

// ES5
(function() {
    var c = 3;
})();

console.log(c)  // <-- the old way for private vars 


///////////////////////////////////////////////
// STRINGS

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1998;

function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + ' .He was born is ' + yearOfBirth, ' he is '+calcAge(yearOfBirth) + ' years old');

// ES6 --> template literals 
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('h'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));



////////////////////////////////////////////////////
// Arrow funcitons

const years = [1990, 1965, 1982, 1937];

// ES5 
var ages5 = years.map(function(el) {
    return 2018 - el;
});
console.log(ages5)

// ES6
let ages6 = years.map(el => 2017 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`)
console.log(ages6);

ages6 = years.map((el,index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
})
console.log(ages6);


///////////////////////////////////////////////////////
// Arrow funciton2 - > this keyword

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is '+self.color;
            alert(str);
        })
    }
}

box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is '+ this.color;
            alert(str);
        })
    }
}
box6.clickMe();



const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {    // this will not work like in ES5 !!
        
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is '+ this.color;
            alert(str);
        })
    }
}
box66.clickMe();


function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el) {
        return this.name + 'is friends with ' + el;
    }.bind(this));
    
    console.log(arr);
    
}

var friends = ['Bob', 'Jane', 'Mark' ];
new Person('John').myFriends5(friends);

// ES6 

Person.prototype.myFriends6 = function(friends) {
    
    var arr = friends.map(el => `${this.name} is friends with ${el}` );
    
    console.log(arr);
    
}

new Person('Mike').myFriends6(friends);




////////////////////////////////////////////////////
// Desctructuring 

// ES5 
var john = ['John', 26];
//var name = john[0];
//var age = john[1];


// ES6
const [name, year] = ['John', 26];
console.log(name);
console.log(year)

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;    // use a different name
console.log(a);
console.log(b);


function calcAgeRetirement(year) {
    const age2 = new Date().getFullYear - year;
    return [age2, 65-age2];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);




///////////////////////////////////////////////////
// Arrays

const boxes = document.querySelectorAll('.box');


// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
})


// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');



// ES5
/*
for(var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }
    
    boxesArr5[i].textContent = 'I changed to blue!';
}
*/
/*
// ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}





// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// ES6 

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur=> cur >= 18));



///////////////////////////////////////////////
// Spread operator


function addFourAges(a,b, c, d) {
    return a+ b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18,30,12,21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);


// ES6
const sum3 = addFourAges(...ages);  // expanding the array into its components...!
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
console.log(all);

Array.from(all).forEach(cur => cur.style.color = 'grey');
*/

////////////////////////////////////////////
// Rest parameters


// ES5
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function(cur) {
        console.log((2018 - cur) >= 18)
    })
}

isFullAge5(1990, 1999, 1965, 2011);