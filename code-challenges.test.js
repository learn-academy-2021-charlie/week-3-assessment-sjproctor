// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// describe("name of function", () => {
//   test("information about the function action", () => {
//     expect(nameOfFunction(input)).toEqual("output")
//   })
// })


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// Create a function - fibo
// Parameter - number
// Iteration - for loop
// Need storage for each iteration - made starter [1, 1] array
// The next number is the sum of the previous two x = x-1 + x-2
// Return answerArray


// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibo", () => {
  test("returns an array of that length containing the numbers of the Fibonacci", () => {
    expect(fibo(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibo(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})


// b) Create the function that makes the test pass.

const fibo = (number) => {
  let answerArray = [1, 1]
  for(let i=2; i<number; i++){
    answerArray.push(answerArray[i - 2] + answerArray[i - 1])
  }
  return answerArray
}

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// Create a function - onlyOdds
// Parameter - array
// Iteration - filter for typeof number and number % 2 !== 0
// Sort and return the array

// a) Create a test with expect statements for each of the variables provided.


describe("onlyOdds", () => {
  test("returns a new array of only odd numbers sorted from least to greatest", () => {
    var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    // Expected output: [-9, 7, 9, 199]
    var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    // Expected output: [-823, 7, 23]
    expect(onlyOdds(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(onlyOdds(fullArr2)).toEqual([-823, 7, 23])
  })
})

// b) Create the function that makes the test pass.

const onlyOdds = (array) => {
  let filteredArray = array.filter(value => {
    return typeof value === "number" && value%2 !== 0
  })
  return filteredArray.sort((a, b) => a - b)
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// Create a function - addNum
// Parameter - array
// Iteration - forEach, map, for loop, reduce
// Forloop, foreach - Add the current value to the previous total value and push that to a new array
// Either the array or a anchor variable outside the iteration, inside the iteration we are adding the current value to the previous value

// a) Create a test with expect statements for each of the variables provided.

describe("addNum", () => {
  test("returns an array of the accumulating sum", () => {
    var numbersToAdd1 = [2, 4, 45, 9]
    // Excpected output: [2, 6, 51, 60]
    var numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]
    var numbersToAdd3 = []
    // Expected output: []
    expect(addNum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    // expect(addNum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    // expect(addNum(numbersToAdd3)).toEqual([])
  })
})

// b) Create the function that makes the test pass.

// const addNum = (array) => {
//   if(array.length > 0){
//     let arraySum = [array[0]]
//     for(let i=1; i<array.length; i++){
//       arraySum.push(array[i] + arraySum[i - 1])
//     }
//     return arraySum
//   }
//   return []
// }

// const addNum = (array) => {
//   let arraySum = []
//   if(array.length === 0){
//     return array
//   } else {
//     array.reduce((acc, value, index) => {
//       return arraySum[index] = acc + value
//     }, 0)
//     return arraySum
//   }
// }


const addNum = (array) => {
  let anchor = 0
  return array.map(value => {
    console.log("anchor:", anchor)
    console.log("value:", value)
    return anchor += value
  })
}

// var numbersToAdd1 = [2, 4, 45, 9] ==> [2, 6, 51, 60]
