// count pairs with given sums.

// Input:
// N = 4, K = 6
// arr[] = { 1, 5, 7, 1}
// Output: 2
// Explanation:
// arr[0] + arr[1] = 1 + 5 = 6 
// and arr[1] + arr[3] = 5 + 1 = 6.

// Input:
// N = 4, X = 2
// arr[] = { 1, 1, 1, 1}
// Output: 6
// Explanation: 
// Each 1 will produce sum 2 with any 1.

const array = [1,1,1,1]

// function to count the pairs with given sums.

function countPairs(arr,k) {
    let count = 0
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i + 1; j < array.length; j++){
            if (arr[i] + arr[j] === k) {
                count++
            }
        }
    }
    return count
}


// function call and output.

console.log(countPairs(array, 2));