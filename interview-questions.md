# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer:
Parameter are for variable declarations. Arguments are actual values passed to a method.

Researched answer:
Prarameter and argument are often used interchangably, but they have slight differences. Parameter is used in place of a value as sort of a representation of that value (ie. variable). Arguments are the values themselves. Here is an example:

function myAge(age) {
    console.log(`I am ${age} years old !`)
}
myAge(3 * 9)

Here `age` is the Parameter and `(3,9)` are the arguments passed through the parameter. 

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer:
.map() `iterates through each index of an array. I know one requirment is  the array has to be called upon inorder for .nap() to work. it need to know what its iterating through`

Researched answer:
the .map() method is a built-in method within JavaScript. .map() is used to transform an array into a new array of the same length; but the new array is modified according to whatever callback function is provided. The callback function (`currentValue`)is the only required parameter for the .map() method. Additionally there are two option parameter. These are:
#1 `index` : the indexOf the current element being processed
#2 `array`: the origional array being mapped
// Structure:
myArray.map((currentValue , index , array) => {

})

3. What is the difference between map and filter?

Your answer:
.map() it for locating where a value is.filter() requires a conditional statement inorder to know what to filter from the given array. 
Researched answer:
Both are higher-order-functions in JavaScript that operate on arrays. The major difference between the two is that .map() transforms an array into a new array of the same length; by applying a function to each element. Whereas .filter() returns an array containing elements that meet a specified condition. 
Example:
.map()
myArray: [2,4,6,8,10,13]
const dblNum = myArray.map((element) => element * 2) // output: [4,8,12,16,20,26] --- values were altered
.filter()
myArray: [2,4,6,8,10,13]
const dblNum = myArray.filter((element) => element % 2 != 0) // output: [13] --- values were filtered based off the conditional statement.

1. What is iteration?

Your answer:
moving along a given set of values from left to right. This process continues until a condition is met.
Researched answer:
Iteration is the process of repeating a set of instructions until a certain condition is met. Iteration is often used to move across or manipulate collections of data, such as arrays or objects. In JavaScript there are several ways to preform iteration, including:
#1 `for (var i = 0; i < myArray.length; i++)` a for loop // note: the values of a for loop can be altered depending on need. 
Example:
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// output: 
1
2
3
4
5

#2 `while` loops, which allow you to repeatedly preform a set of instructions as long as the condition is TRUE.
Example:
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
let i = 0;

while (i < numbers.length) {
  sum += numbers[i];
  i++;
}

console.log(sum);

// output: 15

#3 `do-while` loops, which are simpilar to `while` loops, but the set of instructions are always exectucted atleast once; 
regardless in the condition is TRUE OR NOT.
Example:
let input;

do {
  input = prompt("Enter a number between 1 and 10:");
} while (isNaN(input) || input < 1 || input > 10);

console.log(`You entered: ${input}`);

//output:
If the user enters a valid number between 1 and 10, the output will be:
You entered: [user input]

If the user enters an invalid input (e.g. a string, a number outside the range of 1 to 10), the loop will continue prompting for input until a valid input is received.

#4 `for...in` loops, which allow you to iterate over an OBJECT.
Example:
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

//output:
name: John
age: 30
city: New York

#5 `for...of` loops, which allow you to iterate over an ITERABLE OBJECT, such an ARRAY OR STRING.
Example:
const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}

//Output

apple
banana
cherry

1. What is the difference between a function and a method?

Your answer:
function is the process and method is how that process is conducted. 
Researched answer:
Functions are a block of code that preform a specific task and can be called from anywhere in the code. Methods however are functions that belong to an object, and are called on that object. Basically methods are specific kinds of functions that are associated with objects, and are called upon by using .Notation. The structure would look like: `object.method()`.

6. STRETCH: What is hoisting in JavaScript?

Your answer:
well hoisting means to lift up, so im assuming hoisting in javascript is when a code block is pushed to the top. how that happens or what it looks like is beyond me. 
Researched answer:
Hoisting is a feature of JavaScript that moves variable and function declarations to the top of their scope, so it looks like they are declared at the beginning of the scope, regardless of where they are actually declared in the code. This can sometimes cause unexpected behavior, so it's important to be aware of it and declare variables and functions properly to avoid any issues.


##Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component:
A reusable block of code that encapsulates a set of User Interface(UI) elements and their behavior, and can be rendered multiple times in a web application.
2. Spread operator:
A syntax in JavaScript that allows an iterable such as an array or string to be expanded into individual elements. It is denoted by three dots (...) and is often used in function arguments, array literals, and object literals.
3. React state:
An object that holds information about the current state of a React component. State can be updated using the setState() method, and any changes to state trigger a re-render of the component.
4. React props:
properties that are a way to pass data from one React component to another. Props are passed as attributes in JSX and can be accessed in the receiving component as an object.
5. DOM events:
Actions or occurrences that happen in a web browser, such as a user clicking on a button or scrolling down a page. DOM events can be handled using event listeners, which are functions that are executed when the event occurs.