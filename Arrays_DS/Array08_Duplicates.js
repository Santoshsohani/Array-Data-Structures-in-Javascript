// find duplicates in array.

// Given an array of integers nums containing n + 1 integers where each integer is in the range[1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.

// Input: nums = [1, 3, 4, 2, 2]
// Output: 2

// Input: nums = [3, 1, 3, 4, 2]
// Output: 3

// Input: nums = [1, 1]
// Output: 1

// Input: nums = [1, 1, 2]
// Output: 1

const array = [3, 1, 3, 4, 2]

// function to find the duplicates in an array.

function duplicatesInArray(arr) {
    let found = false
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] === arr[j]) {
                found = true
                ele = arr[i]
                break
            }
        }
    }
    return {
        elementFound: ele,
        elementStatus : found
    }
}

// function call and the output

console.log(`Duplicate element in the array is ${duplicatesInArray(array).elementFound}`);