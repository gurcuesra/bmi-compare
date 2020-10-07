let massMark = 80;
let massJohn = 100;
let heightMark = 1.65;
let heightJohn = 1.50;

let bmiMark = massMark / (heightMark * heightMark);
let bmiJohn = massJohn / (heightJohn * heightJohn);

// BMI calculation formula is mass / (height * height)
// But, mass will be kg. Height will be meter

bmiMark = bmiMark.toFixed(2);
bmiJohn = bmiJohn.toFixed(2);

console.log(`Mark's BMI is ${bmiMark}. John's BMI is ${bmiJohn}.`)

const higherBMI = bmiJohn > bmiMark;

console.log(`Is John's BMI is higher than Mark's? Answer is “${higherBMI}". Because Mark's BMI is ${bmiMark} and John's BMI is ${bmiJohn}.`);

// 7 -> Challange 
let user1Mass = parseInt(prompt("1 - Please enter your mass as kg!"));
let user2Mass = parseInt(prompt("2 - Please enter your mass as kg!"));
let user1Height = parseInt(prompt("1 - Please enter your height as meter!"));
let user2Height = parseInt(prompt("2 - Please enter your height as meter!"));

let bmiUser1 = user1Mass / (user1Height * user1Height);
let bmiUser2 = user2Mass / (user2Height * user2Height);

bmiUser1 = bmiUser1.toFixed(2);
bmiUser2 = bmiUser2.toFixed(2);

if(bmiUser1 > bmiUser2) {
  alert(`User 1's BMI is bigger than User 2's BMI. User 1's BMI is ${bmiUser1} and User 2's BMI is ${bmiUser2}.`);
} else {
  alert(`User 2's BMI is bigger than User 1's BMI. User 1's BMI is ${bmiUser1} and User 2's BMI is ${bmiUser2}.`);
}