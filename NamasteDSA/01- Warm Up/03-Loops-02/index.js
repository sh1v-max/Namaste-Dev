// write a function that searches for an element in an array and returns its index
// if the element is not found, return -1

function searchElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i
    }
  }
  return -1
}

let arr = [1, 2, 3, 4, 5]
let result = searchElement(arr, 5)
// console.log(result)

// wrote a function that returns the number of negative numbers in an array

function countNegativeNumbers(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++
    }
  }
  // console.log(count)
  return count
}

let arr2 = [2, -6, 4, 8, 1, -9]
let result2 = countNegativeNumbers(arr2)
console.log(result2)
