// Minimum number of jumps to reach the end of the array.

// Given an array of N integers arr[] where each element represents the max number of steps that can be made forward from that element.Find the minimum number of jumps to reach the end of the array(starting from the first element).If an element is 0, then you cannot move through that element.

//Note: Return - 1 if you can't reach the end of the array

// Input:
// N = 11
// arr[] = { 1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
// Output: 3
// Explanation: 
// First jump from 1st element to 2nd 
// element with value 3. Now, from here 
// we jump to 5th element with value 9,
//     and from here we will jump to last.

// Input:
// N = 6
// arr = { 1, 4, 3, 2, 6, 7}
// Output: 2
// Explanation: 
// First we jump from the 1st to 2nd element 
// and then jump to the last element.

const array = [1, 4, 1, 2, 3, 3, 2, 6, 1,0]


// function to find the Minimum number of jumps to reach the end of the array.

function MinStepsToEnd(arr) {
    let count = 0;
    let i = 0;

    for (let i = 0; i < arr.length-1; i++){
        if (arr[i] <= 0) {
            return -1;
        }
        else {
            count++;
            i = i + arr[i];
        }
    }
    return count
   
}

// function call and output

console.log(MinStepsToEnd(array));