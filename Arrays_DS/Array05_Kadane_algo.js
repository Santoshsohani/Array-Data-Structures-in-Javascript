// Kadane's algorithm
// Used to find the maximum subArray.

// input --> 1,2,3,-2,5  output --> 9
// input --> -1,-2,-3,-4  output --> -1

const array = [1, 2, 3, -2, 5 ]

// function of kadanes algorithm

function kadane_algo(arr) {
    let maxsum = arr[0]
    let cursum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        cursum += arr[i]

        if (cursum > maxsum) {
            maxsum = cursum
        }
    }
    return maxsum
}

// function call and the output.

console.log(kadane_algo(array));