// Q1. Write a function to check if an array contains a particular number.

// Examples

// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false
function checkNumber (array, number){
for(let i =0;i<array.length;i++){
    if(array[i]==number) return true;
}
return false;
}
// Q2. Write a function that takes two integers (hours, minutes) and converts them to seconds.

// Examples

// convertToSeconds(1, 3) ➞ 3780
// convertToSeconds(2, 0) ➞ 7200
// convertToSeconds(0, 0) ➞ 0
function convertToSeconds(hours,minutes){
    var result= ((hours*60)*60)+(minutes*60)
    console.log(`${hours}:${minutes} =====> ${result} seconds`);
}
// Q3. Use the following data to solve the problems below.

var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}
// access the value of the capacityInGallons key
console.log(aquarium.capacityInGallons);
// add 2 rocks to the numberOfRocks in the aquarium
aquarium.numberOfRocks+=2;
console.log(aquarium.numberOfRocks);
// access the clown fish and print the object.
console.log(aquarium.fish[2])
// access the size of the puffer fish.
console.log(aquarium.fish[1].size)
// your goldfish grew! Access the size key of goldfish and reassign it to '4 inches'.
aquarium.fish[0].size="4 inches";
console.log(aquarium.fish[0].size)
// you bought a new fish! Make a new object for a '5 inch' long, blue starfish and add it to the fish array.
newFish={type:"starfish",size:"5 inches",color:"blue"}
aquarium.fish.push(newFish);
console.log(aquarium.fish);

console.log("==============================================");
//Q4 

json = (require('./data')); 
chars=JSON.parse(json);



// Write a function that console.logs each character object in the data.
let logData = function() {
    console.log(chars.people)
 }
 logData();
 // Write a function that console.logs each character's name
 let logNames = function() {
     for(let i = 0;i<chars.people.length;i++){
         console.log(`Character name ${i} : ${chars.people[i].name}`)
     }
     };
logNames();
// Write a function that console.logs each character's name and eye color
let logNameEyes = function() {
    for(let i = 0;i<chars.people.length;i++){
        console.log(`Character name ${i} : ${chars.people[i].name}`)
        console.log(`Character eye color ${i} : ${chars.people[i].eye_color}`)
    }
};
logNameEyes();
// Write a function that console.logs each character's name whose mass is greater than 75
let logByMass = function() {
    for(let i=0;i<chars.people.length;i++){
        if(chars.people[i].mass>75)
        console.log(`Character's name whose mass is greater than 75 : ${chars.people[i].name}`)
    }
};
logByMass();

// **Bonus Questions:

// 1. Write a function that takes in a parameter called num, and returns a random number between 0 and num. Look up documentation for Math.Random().

// Examples

// getRandomNum(6) ➞  returns a random number between 0 and 6
// getRandomNumber(10) ➞ returns a random number between 0 and 10

function getRandomNumber(num){

    var result= Math.floor(Math.random()*(num+1));
    console.log(result);

}
getRandomNumber(12);
// 2. A leap year has one day added to February for being synchronized with the seasonal year. A leap year appears with a regular frequency, which is determined by the rule below:

// The year is exactly divisible by 400, or exactly divisible by 4 and not exactly divisible by 100. Given a year you must implement a function that returns true if it's a leap year, or false if it's not.

// Examples
// isLeap(2020) ➞ true // Exactly divided by 4 and not by 100.
// isLeap(1800) ➞ false // Exactly divided by 4, but is also exactly divided by 100.
// isLeap(2000) ➞ true // Exactly divided by 400.
// isLeap(2019) ➞ false // It can't be exactly divided by 400 or by 4.
function isLeap(num){
   return (num % 100 === 0) ? (num % 400 === 0) : (num % 4 === 0);

}
console.log(isLeap(2020))
console.log(isLeap(1800)) 
console.log(isLeap(2000))
console.log(isLeap(2019))

// Notes
// Exactly divided can be interpreted as the remainder of the division is equal to 0.