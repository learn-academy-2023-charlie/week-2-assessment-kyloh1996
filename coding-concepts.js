// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Charlie 2023"
console.log(cohort.split(""))

// a) Your answer: I predict the output will be: ["C","h","a","r","l","i","e","","2","0","2","3"] because of the method .split("")
// b) Verify and explain:
// Output: [
//   'C', 'h', 'a', 'r',
//   'l', 'i', 'e', ' ',
//   '2', '0', '2', '3'
// ]
// Explain: The cohort string variable is split into each index of the value by the .split("") method. The .split() method is called upon the cohort variable, passing an empty string `""` as a seperator argument. When an empty string is used as the sperator argument each char within the string is seperated, making each char a single element, including empty spaces. 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: I dont think it will log anything. Ther is no return to this fuction, therfore it probably will come back undefined. 
// b) Verify and explain:
//Output: undefined
//Why? the greeter () function is not defined without a return statement. When the argument "LEARN Strudent" is passed into the function call as an argument, the program doesnt understand what to output without the return statement following.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)


// a) Your answer:[8,10,12,14,16], because the function maps out the array and multiplies each index by 2
// b) Verify and explain: 
// Output: [ 8, 10, 12, 14, 16 ]
// Why? The .map() function iterates over each value in the array, and the ((value)=> value___) function manipulates each value by multiplying the values by 2. The codes is defined by the function call `multipliedByTwo`, so when called upon with the console log, the function is executed.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: it wont long the odds because the finding out would be stricly equal to(===). i think it will either leave the even number or come back with an error. Then again I dont really understand what the !(not)==(loosly equal) means, like why couldnt they just use `!=`? 
// b) Verify and explain: 
//Output: [ 11, 13, 15 ]
//Why? The defining element of this function is `onlyOdds`. When called upon in the console.log(), the function is execited. Taking the array and applying .filter() method creates a new array based upon the conditions implemented by the arrow function ((number) => number % 2 !== 0); the ending statement `number % 2 !== 0` being the conditional. The modulo operator (%) checks if the remainder is not equal to 0. If the remainder is not, then the value is odd and is output in the new array. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: This is an object. myCodingSkills.languages[0] -> myCodingSkills references the _______, and .languages[0] -> references the key languages and the index of 0. With that I think the output will be "javascript".
// b) Verify and explain: 
//Output: "javascript"
//Why? `myCodingSkills` variable is an object that contains four properties. The console.log() statment acesses the first element `languages` throught the .Notation. That alone would only access ["JavaScript", "Ruby"], but by applying an index of[0] using bracket notation, the output would become the placeholder of that index within the array; which is "javaScript".

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Charlie"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Learn is the class. name would be "George"; this would be filled in when console logged and the output would be: "George", "charlie" , 2023 .
// b) Verify and explain: 
// Output: Learn { student: 'George', cohort: 'Charlie', year: 2023 } . 
//Why? This is a class, you can tell by the PascalCase. This class is defined as Learn, which has a constructor() method that take in the parameter `name`, which sets 3 properties on the newely created object. The student value is set to the value of the `name` parameter. The const Learn = new Learn("George") statement creates a `new` class with the `name` perameter set to "George". This then creates a new object with the `student` property set to "George". This object is assigned to the const learnStudent, so when called upon by the cosole.log() the object type of `Learn` is output. When I gave my answer, I forgot to provide the class and the outputting object with with proper syntax. 

function myAge(age) {
  console.log(`I am ${age} years old !`)
}
myAge(3 * 9)