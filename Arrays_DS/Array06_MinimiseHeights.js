// Mininmise the maximum difference between heights.

// Given an array arr[] denoting heights of N towers and a positive integer K, you have to modify the height of each tower either by increasing or decreasing them by K only once.After modifying, height should be a non - negative integer. 
// Find out what could be the possible minimum difference of the height of shortest and longest towers after you have modified each tower.

let array = [8,1,5,4,7,5,7,9,4,6]

// function for BubbleSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr;
}

// function to minimise the maximum difference between heights.

function minimiseMaxDifference(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > k) {
            arr[i] = arr[i] - k;
        }
        else if (arr[i] < k) {
            arr[i] = arr[i] + k;
        }
        else if (arr[i] == k) {
            arr[i] = arr[i] + k;
        }
        else {
            continue;
        }
    }
    bubbleSort(arr);
    return arr[arr.length - 1] - arr[0]
}



// function call and the Output.


console.log(minimiseMaxDifference(array,5));