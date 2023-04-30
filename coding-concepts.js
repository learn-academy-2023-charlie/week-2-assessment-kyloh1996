// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Charlie 2023"
console.log(cohort.split(""))

// a) Your answer: I predict the output will be: ["C","h","a","r","l","i","e","","2","0","2","3"] because of the method .split()
// b) Verify and explain:

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: I dont think it will log anything. because name isnt defined...
// b) Verify and explain:

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer:[8,10,12,14,16], because the function maps out the array and multiplies each index by 2
// b) Verify and explain:

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: it wont long the odds because the finding out would be stricly equal to(===). i think it will either leave the even number or come back with an error. Then again I dont really understand what the !(not)==(loosly equal) means
// b) Verify and explain: //OUTPUT: [ 8, 10, 12, 14, 16 ] Seperated the even and odd values [ 11, 13, 15 ] // WHY?

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
// b) Verify and explain: Learn { student: 'George', cohort: 'Charlie', year: 2023 } . 
