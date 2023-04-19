/*
INSTRUCTIONS

1. using promise API, i.e. only .then() .catch() and .finally() methods, consume the methods in firstnames.js and lastnames.js
2. don't use any async/await here
3. lastnames.js method expects a positive integer id, it returns a lastname, if the id is multiple of 5 it returns a nonexistent lastname
4. firstnames.js method expects a lastname generated by the method above, it returns a name
5. methods should be consumed sequentially, i.e. lastnames method first, and its results will serve as argument for firstnames method
6. implement a randomizing logic that provides you an id for lastnames method,
this value type must be a positive integer between 0-100, or something that is not a positive integer
The point here is getting correct and incorrect values to get successful and failing promises results from lastnames method

Example:
const id = yourRandomMethod() //first run
 -- id gets a value of undefined, or you can get a null, boolean, string, whatever different to a positive integer

const id = yourRandomMethod() //second run
 -- id gets a value of 31

const id = yourRandomMethod() //third run
-- id gets a value of 10

6. use promise chaining accordingly, don't forget error handling
7. log the resultant fullname, or the error, at the end
*/

function solution() {
  // YOUR SOLUTION GOES HERE

  // You generate your id value here
  const randomId = () => {
    const random = Math.floor(Math.random() * 3);
    if (random == 1) {
      return Math.floor(Math.random() * 100);
    } else if (random == 2) {
      return -random;
    }
    return true;
  };

  // You call the lastnames method with your id
  const getLastnameWithId = require("./lastnames");
  getLastnameWithId(randomId())
    .then((lastname) => {
      // You call the firstname method
      const getFirstnameWithLastname = require("./firstnames");
      return Promise.all([getFirstnameWithLastname(lastname), lastname]);
    })
    .then(([firstname, lastname]) => {
      // You log the fullname, or error, here
      console.log(`The fullname is ${firstname} ${lastname}`);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

solution();
