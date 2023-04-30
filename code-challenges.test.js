// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.  

// Pseudo code:
// input: takes in an OBJECT as an ARGUMENT -> function ( object) => {}
// output: values evenly divisible by 3 or not
// HOW? if... num % 3 === 0 (remainder) -> divisible , else if...num % 3 === 1 (remainder) -> not



      


// a) Create a test with expect statements for each of the variables provided.


// describe(`divisibleBy`,  () => {
//     it(`should return a string indicating if the number is divisible by three or not`, () => {
//         const object1 = { number: 15 }
//         const object2 = { number: 0 }
//         const object3 = { number: -7 }
//       expect(divisibleBy(object1)).toEqual("15 is divisible by three");
//       expect(divisibleBy(object2)).toEqual("0 is divisible by three");
//       expect(divisibleBy(object3)).toEqual("-7 is not divisible by three");
//     })
//   })

//   FAIL  ./code-challenges.test.js
//   divisibleBy
//     ✕ should return a string indicating if the number is divisible by three or not (1 ms)

//   ● divisibleBy › should return a string indicating if the number is divisible by three or not

//     ReferenceError: divisibleBy is not defined


// b) Create the function that makes the test pass.


describe(`divisibleBy`,  () => {
            it(`should return a string indicating if the number is divisible by three or not`, () => {
              expect(divisibleBy(object1)).toEqual("15 is divisible by three");
              expect(divisibleBy(object2)).toEqual("0 is divisible by three");
              expect(divisibleBy(object3)).toEqual("-7 is not divisible by three");
            })
          })
          
        class Test {                         // Had issues returnig the second output when using the if, else statements by themself; so I created a class to wrap the information. 
            constructor(number) {
              this.number = number;
            }
          
            answer() {
              return this.number % 3 === 0;
            }
          }
          
          const object1 = new Test(15);
          const object2 = new Test(0);
          const object3 = new Test(-7);
          
          const divisibleBy = (obj) => {      // parameter is the obj 
            if (obj.answer()) {
              return `${obj.number} is divisible by three`;    // used `${}` to output the number value
            } else {
              return `${obj.number} is not divisible by three`;
            }
          };

          //REFACTOR: 
          // const divisibleBy = (obj) => {
          //   return obj.answer() ? ${obj.number} is divisible by three : ${obj.number} is not divisible by three;
          //   };

    //    Testing:    
    //    console.log(divisibleBy(object1)) // output: 15 is divisible by three
    //    console.log(divisibleBy(object2)) // output: 0 is divisible by three
    //    console.log(divisibleBy(object3)) // output: -7 is not divisible by three


    // warning package.json: No license field
    // $ /Users/learnacademy/Desktop/weekly-assignments-lohke/week-2-assessment-kyloh1996/week-2-assessment-kyloh1996/node_modules/.bin/jest
    //  PASS  ./code-challenges.test.js
    //   divisibleBy
    //     ✓ should return a string indicating if the number is divisible by three or not (1 ms)

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code:

// input: takes in an array of words
// output: returns an array with all the words capitolized
// How? use .map() to iterate through the array of strings, and .toUpperCase to capitolize the strings.

// a) Create a test with expect statements for each of the variables provided.
// describe("toCapitolize" , () => {
//     it("takes in an array of strings" , () => {
//         const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]

//         const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]

//         expect(toCapitolize(randomNouns1)).toEqual(["STREETLAMP", "POTATO" , "TEETH" , "CONCLUSION" , "NEPHEW"])
//         expect(toCapitolize(randomNouns2)).toEqual(["TEMPERATURE" , "DATABASE" , "CHOPSTICKS" , "MANGO"]);
//         })
// })
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// FAIL  ./code-challenges.test.js
// toCapitolize
//   ✕ takes in an array of strings

// ● toCapitolize › takes in an array of strings

//   ReferenceError: toCapitolize is not defined
  
  // b) Create the function that makes the test pass.

  describe("toCapitolize" , () => {
    it("takes in an array of strings and returns and array with all values capitolized" , () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]

        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]

        expect(toCapitolize(randomNouns1)).toEqual(["STREETLAMP", "POTATO" , "TEETH" , "CONCLUSION" , "NEPHEW"])
        expect(toCapitolize(randomNouns2)).toEqual(["TEMPERATURE" , "DATABASE" , "CHOPSTICKS" , "MANGO"]);
        })
})

const toCapitolize = (arr) => {
    return arr.map(word => word.toUpperCase())
    }
//    Testing:
//    console.log(toCapitolize(randomNouns1)) // output: [ 'STREETLAMP', 'POTATO', 'TEETH', 'CONCLUSION', 'NEPHEW' ]
//    console.log(toCapitolize(randomNouns2)) // output: [ 'TEMPERATURE', 'DATABASE', 'CHOPSTICKS', 'MANGO' ]
   


    // PASS  ./code-challenges.test.js
    // toCapitolize
    //   ✓ takes in an array of strings (1 ms)
        

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.


// Pseudo code:
// input: takes in a string 
// output:logs the index [i] of the first vowel 
// How? .indexOf(), using a for loop to iterate through(might be able to use .map())

// a) Create a test with expect statements for each of the variables provided.

//   describe("firstVowelIndex" , () => {
//     it("takes in a string" , () => {
//         const vowelTester1 = "learn"
//         const vowelTester2 = "academy"
//         const vowelTester3 = "challenges"
//         expect(firstVowelIndex(vowelTester1)).toEqual(1);
//         expect(firstVowelIndex(vowelTester2)).toEqual(0);
//         expect(firstVowelIndex(vowelTester3)).toEqual(2)
//         })
// })

// FAIL  ./code-challenges.test.js
// firstVowelIndex
//   ✕ takes in a string (1 ms)

// ● firstVowelIndex › takes in a string

//   ReferenceError: firstVowelIndex is not defined

// const vowelTester1 = "learn"
// Expected output: 1
// const vowelTester2 = "academy"
// Expected output: 0
// const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

  describe("firstVowelIndex" , () => {
    it("takes in a string and logs the index of the first vowel" , () => {
        const vowelTester1 = "learn"
        const vowelTester2 = "academy"
        const vowelTester3 = "challenges"
        expect(firstVowelIndex(vowelTester1)).toEqual(1);
        expect(firstVowelIndex(vowelTester2)).toEqual(0);
        expect(firstVowelIndex(vowelTester3)).toEqual(2)
        })
})

            
// const vowelTester1 = "learn"
// const vowelTester2 = "academy"
// const vowelTester3 = "challenges"



  const firstVowelIndex = (str) => {
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) { // you can add .toLowerCase() for instances of a Capitalized vowel.
        return i;
      }
    }
    return -1; // for when no vowels are found
  }
  
  // Testing:
//   console.log(firstVowelIndex("learn")); // output: 1
//   console.log(firstVowelIndex("academy")); // output: 0
//   console.log(firstVowelIndex("challenges")); // output: 2
  




// PASS  ./code-challenges.test.js
// firstVowelIndex
//   ✓ takes in a string and logs the index of the first vowel (1 ms)