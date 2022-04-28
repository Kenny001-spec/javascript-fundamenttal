console.log('javascript is fun🧨😋')

// VARIABLES

// let fullName, birthYear, job, isMarried;
// fullName = "Abubakar kehinde";          //String
// birthYear = '1997';           //Number
// job = "Developer";          //String
// isMarried = false;          //Boolean

// console.log(fullName);
// console.log(birthYear);
// console.log(job)
// console.log(isMarried);
// console.log('My name is ' + fullName + '. I was born in ' + birthYear + '. I am a ' + job + ' and my marital status is ' + isMarried);
// console.log('My name is ' + fullName + '. I was born in ' + birthYear + '. I am a ' + job + ' and my marital status is ' + isMarried);
// console.log('My name is ' + fullName + '. I was born in ' + birthYear + '. I am a ' + job + ' and my marital status is ' + isMarried);

/**Using 'typeof' to check Variables */
// console.log(typeof (fullName));
// console.log(typeof (birthYear));
// console.log(typeof (job));
// console.log(typeof (isMarried));

//The 7 Data-Types Of Javascript
// 1. Numbers...numbers have decimals
let myNumber = 8;

// 2. String...are texts written in between single or double quotes
let myCountry = 'Nigeria';

// 3. Boolean...Javascript login which will turns either TRUE or FALSE
let_canVote = true;

// 4. Undefined...This is the value if we don't assign any value to a VARIABLE.
// Undefined can be used to set a VALUE for a VARIABLE also.
let mySchool;
let myDept = undefined;

// 5. Null...is an empty Object
let $can_drive = null;

/**Javascript KEYWORDS that can't be used to set VARIABLES */
// 1. name
// 2. new
// 3. keyword
// 5. function
// 6. array
// 7. Variable Keywords


/**VARIABLE MUTABILITY ===> Between const, let, var */
// let age = 30;
// age = 40;
// age = 50
// console.log(age);

// const birthYear = 1990;
// console.log(birthYear);

// let myRegion;
// myRegion = 'South-West'
// console.log(myRegion);

// const favColor = 'black';
// console.log(favColor);

// var job
// var job = 'Programmer';
// var job = 'Teacher';
// console.log(job);


/**JAVASCRIPT BASIC OPERATORS */
// Minus Operator (-)
// const thisYear = 2022;
// const ageJohn = thisYear - 1990;
// const ageSarah = thisYear - 2004;
// const ageBob = thisYear - 1976;
// console.log(ageJohn, ageSarah);

// Plua Operator (+)
// const myBalance = 2500 + 658;
// console.log(myBalance);

// The Plus Operator can used for CONCATENATION
// const firstName = 'jack';
// const lastName = 'Sparrow';
// const fullName = firstName + lastName;
// console.log(fullName);
// console.log(firstName + ' ' + lastName)


/**JAVASCRIPT ASSIGNMENT OPERATORS */
// Plus or EQUAL (+=)
// let salary = 1000;
// console.log(salary)

// let salaryPlus = 870;

// let moreSalary = salary += salaryPlus;
// console.log(moreSalary);

// // Plus or EQUAL (+=)
// let fee = 2345;
// let newFee = fee -= 120;
// console.log(newFee);

// // Times or EQUAL (+=)
// let ageSola = 22;
// let ageMummy = ageSola *= 2;
// console.log(ageMummy);


// // Division or EQUAL (/=)
// let naijaPOpulation = 2000;
// let ghanaPopulation = naijaPOpulation /= 3;
// console.log(ghanaPopulation);


// // Exponetiation (**)
// const powerThree = 3 ** 2.
// console.log



/**JAVASCRIPT ASSIGNMENT OPERATORS */
// Less Than (<) and Greater Than (>)
// const isless = 86 < 72;
// console.log(isless);

// // Less Than (<=) and Greater Than (>=)
// const isGreater = 86 >= 78;
// console.log(isGreater);     //True

// console.log(ageSarah >= 18);   //false




/**CODING CHALLENGE  #1 */
// const massMark = 78;
// const massJohn = 92;

// const markHeight = 1.69;
// const johnHeight = 1.95;

// const BMIMark = massMark / markHeight ** 2;
// const BMIJohn = massJohn / (johnHeight * johnHeight);

// const hasHigherBMI = BMIMark > BMIJohn;   //True

// console.log(BMIMark, BMIJohn);
// console.log(hasHigherBMI);

/** CODING CHALLENGE #2 */
// const massBola = 95;
// const massAyo = 70;

// const bolaHeight = 1.60;
// const ayoHeight = 1.45;

// const BMIBila = massBola / bolaHeight ** 2;
// const BMIAyo = massAyo / (ayoHeight * ayoHeight);

// const getHigherBMI = bolaHeight < massAyo;

// console, log(bolaHeight, ayoHeight);
// console.log(getHigherBMI);

/**JAVASCRIPT STRINGS & TEMPLATE LITERALS */
// const firstName = 'jane';
// const lastName = 'mena';
// const job = 'Dancer';
// const yearOfBirth = '1994';

//ES5 Strings
// const janeES5 = 'I\'m ' + firstName + ' ' + lastName + ',\n\ I\'m a ' + job + ' and I am ' + (2022 - yearOfBirth) + ' years old';
// console.log(janeES5);

// // ES6 Template Literals
// const janeES6 = `I'm ${firstName} ${lastName} ${job} ${yearOfBirth}`;
// console.log(janeES6);
// console.log('we are here learning \n\ how to code');

// /**JAVASCRIPT DECISION MAKING (IF/ELSE STATEMENT) */
// const ageSarah = 17;
// const canDriveCar = ageSarah >= 18;
// console.log(canDriveCar);

// if (canDriveCar) {
//     console.log(`Sarah is old enough to drive 🚗`);
// } else {
//     console.log(`Sarah is too young to drive`);
// }

// ///////////////////////
// const birthYear = 1999;

// if (birthYear < 2000) {
//     let century = 20;
//     console.log(`${century}th`);
// } else {
//     let century = 21;
//     console.log(`${century}st`);
// }

// const firstName = 'jane';
// const job = 'soldier';

// if (job === "Dancer") {
//     console.log(`${firstName} is a popular ${job}`);
// } else if (job === 'Teacher') {
//     console.log(`${firstName} is playing for Manchester United${job}`);
// } else if (job === 'footballer') {
//     console.log(`${firstName}a player`);
// } else if (job === 'Driver') {
//     console.log(`${firstName} is a pefect and international driver`);
// } else if (job === 'Lawyer') {
//     console.log(`${firstName} he is a good lawyer`);
// } else if (job === 'engineer') {
//     console.log(`${firstName} he knew how to build`);
// } else {
//     console.log(`${firstName}didn't care about the work 💪`);
// }

// /**JAVASCRIPT TYPE COERSION AND CONVERSION */
// // Conversion
// const inputYear = '1991';
// console.log(inputYear)          // String
// console.log(Number(inputYear));         // Number

// console.log(Number('John'));            // Not a number (Nan)
// console.log(typeof (NaN));

// const myLocalNum = 23;
// console.log(String(myLocalNum));            // String
// console.log(myLocalNum.toString());         // String

// // Coersion
// // When you add a number to a string; it become a string
// console.log('I am ' + 23 + ' years old');

// console.log('78' + '42');           // 7842 ==> String
// console.log('78' - '42');           // 36 ==> Number
// console.log('72' / '8');            // 9 ==> Number
// console.log('20' * '7');            // 140 ==> Number
// console.log('23' - '10' - 3)
// console.log('23' - '10' + 5)


// // Guess the answer
// let n = '1' + 1;
// n = n - 1;
// console.log(n);

//DOM Manipulation
// const firstNumber = document.querySelector('#firstNum');
// const secondNumber = document.getElementById('secondNum');
// const submitBtn = document.getElementById('submitBtn');
// const calcOutput = document.getElementById('calcOutput');

// submitBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     const firstValue = Number(firstNumber.value);
//     const secondValue = Number(secondNumber.value);

//     function multiplyNums(a, b) {
//         return (a * b);
//     }
//     calcOutput.textContent = multiplyNums(firstValue, secondValue);

// })


/**CODING CHALLENGE  #2 */

// const massMark = 78;
// const massJohn = 92;

// const markHeight = 1.69;
// const johnHeight = 1.95;

// const BMIMark = massMark / markHeight ** 2;
// const BMIJohn = massJohn / (johnHeight * johnHeight);

// const hasHigherBMI = BMIMark > BMIJohn;   //True


// const marksBMI = 24.6;
// const johnBMI = 21.2;

// if (marksBMI > johnBMI) {
//     console.log(`mark's BMI of ${BMIMark} is higher than John's BMI of ${BMIJohn}`)

// } else if (BMIJohn > BMIMark) {
//     console.log(`john's BMI of ${BMIJohn} is higher than mark's BMI of ${BMIMark}`)
// }


/**JAVASCRIPT  TRUTHY & FALSEY VALUE */

// Falsy Values
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// // TRUTHY Values
// console.log(Boolean(27));
// console.log(Boolean('Ade'));

// const money = 10;

// if (money) {
//     console.log('Dont spent it all!')
// } else {
//     console.log('You need to get a Job')
// }


/**JAVASCRIPT  EQUALITY OPERATORS */
// Double-equal (==) 👉 this does Types-coersion.
// console.log('18' == 18);

// Tripple-equal (===) 👉 this does NOT type-coersion.
// console.log('84' === 84);

// const favNum = String(prompt('what is your favourite number'));
// console.log(typeof favNum);

// if (favNum !== 7) {
//     console.log('your favourite Number is a string');
// } else if (favNum === 7) {
//     console.log('Now, you have a real number');
// }

/**JAVASCRIPT BOOLEAN LOGIC */

// AND-Operator (&&) 👉 when all conditions are TRUE

// OR-Operation (||) 👉 when One-of-the-conditions is TRUE

// const firstName = 'Alabi';
// const hasDriverLicense = true;
// const hasGoodVision = true;
// const isTired = true;

// if (hasDriverLicense && hasGoodVision && isTired) {
//     console.log(`${firstName} can drive in the night!`);
// } else if (!hasDriverLicense && !hasGoodVision && !isTired) {
//     console.log(`police might arrest Mr.${firstName}`)
// } if (hasGoodVision && isTired) {
//     console.log(`${firstName} Am a big man!`)
// } else if (!isTired && !hasDriverLicense && !hasGoodVision) {
//     console, log(`he is a big man now when he's rich enough`)
// }


/**CODING CHALLENGE  #3 */
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins);
// console.log(scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins wins the Tropy🏆`)
// } else if (scoreKoalas > scoreDolphins) {
//     console.log(`koalas wins the tropy 🏆`)
// } else if (scoreDolphins === scoreKoalas) {
//     console.log(`They played a drawn match or no  winner🤷‍♂️`)
// }

// const scoreDolphins = (97 + 110 + 90) / 3;
// const scoreKoalas = (109 + 95 + 93) / 3;
// console.log(scoreDolphins);
// console.log(scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log(`Dolphins wins the trophy with ${scoreDolphins} points🏆`)
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log(`kaola wins the trophy with ${scoreKoalas} points🏆`)
// } else if (scoreDolphins === scoreKoalas && scoreDolphins <= 100 && scoreKoalas <= 100) {
//     console.log(`nobody wins the match. They have less than 100 points 🤷‍♂️`)
// }


/**JAVASCRIPT  SWITCH STATEMENTS */
// const inputWeekday = prompt('what is your favourite weekday');

// const dayOfTheWeek = 'wednesday';

// if (inputWeekday === 'monday') {
//     console.log(`have a fruithful week`)

// } else if (dayOfTheWeek === 'tuesday') {
//     console.log(`It's a beautiful ${dayOfTheWeek}`);


// } else if (dayOfTheWeek === 'wednesday' || dayOfTheWeek === `thursday`) {
//     console.log(`on ${dayOfTheWeek} I have to attend lecture at the bootcamp`);

// } else if (dayOfTheWeek === `thursday`) {
//     console.log(`on ${dayOfTheWeek} I have to attend lecture at the bootcamp`);

// } else if (dayOfTheWeek === 'friday') {
//     console.log(`${dayOfTheWeek} is for jumat and I will to the mosque🕌`);
//     console.log(`Thank God It's${dayOfTheWeek}we club tonight`)

// } else if (dayOfTheWeek === `saturday`) {
//     console.log(`It's half day at work.nothing much!`);
// } else if (dayOfTheWeek === 'sunday') {
//     console.log(`Yah! it's weeked amd i watch Football⚾`);

// } else {
//     console.log(`you have entered a wrong week day...⚠`);
// }


// switch (dayOfTheWeek) {

//     case 'monday':
//         console.log(`Today is the first day of the week`);
//         break;
//     case 'tuesday':
//         console.log(`it's a free day`);
//         console.log(`I can decide to sleep all day`);
//         break;
//     case 'wednesday':
//     case `thursday`:
//         console.log(`on ${dayOfTheWeek} I have to attend lecture at the bootcamp`);
//         break;
//     case 'friday':
//         console.log(`${dayOfTheWeek} is for jumat and I will to the mosque🕌`);
//         console.log(`Thank God It's${dayOfTheWeek}we club tonight`)
//         break;
//     case 'saturday':
//         console.log(`It's half day at work.nothing much!`);
//         break;
//     case 'sunday':
//         console.log(`Yah! it's weeked amd i watch Football⚾`);
//         break;
//     default:
//         console.log(`you have entered a wrong week day...⚠`);

// }

/**JAVASCRIPT TERNARY OPERATOR */
// const drnkerName = 'Bello'
// const age = 27;
// const canDrink = age >= 18 ? 'can drink alcohol' : 'He can only drink water';
// console.log(canDrink)


// const isEmployed = false;
// console.log(isEmployed ? 'He works at celo' : 'God heal buhari');



// if (age >= 18) {
//     console.log(`${drnkerName} can drink alcohol`);
// } else {
//     console.log(`${drnkerName} he can only drink water`);
// }


/**CODING CHALLENGE  #4 */


// const bill = 275;
// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 2;
// console.log(`The bill was ${bill}, and the tip was ${tip} and the total value is ${bill}` + tip);

// 1. Write a javascript program to display the current Time
// Simple Output :Current time is : 10pm : 30


const d = new Date();
const hour = d.getHours();
const _hour = hour > 12 ? hour - 12 : hour;
const minute = d.getMinutes();
const prepand = hour < 12 ? 'am' : 'pm';

console.log(`current time: ${_hour} : ${minute} ${prepand}`);

console.log(d.getDay())

