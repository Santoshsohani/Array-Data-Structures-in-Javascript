// Merge two sorted arrays without using extra space.

// Given two sorted arrays arr1[] of size N and arr2[] of size M.Each array is sorted in non - decreasing order.Merge the two arrays into one sorted array in non - decreasing order without using any extra space.

// Input:
// N = 4, M = 5
// arr1[] = { 1, 3, 5, 7}
// arr2[] = { 0, 2, 6, 8, 9}
// Output: 0 1 2 3 5 6 7 8 9
// Explanation: Since you can't use any 
// extra space, modify the given arrays
// to form
// arr1[] = { 0, 1, 2, 3}
// arr2[] = { 5, 6, 7, 8, 9}

// Input:
// N = 2, M = 3
// arr1[] = { 10, 12}
// arr2[] = { 5, 18, 20}
// Output: 5 10 12 18 20
// Explanation: Since you can't use any
// extra space, modify the given arrays
// to form
// arr1[] = { 5, 10}
// arr2[] = { 12, 18, 20}

const arrayOne = [10,12]
const arrayTwo = [5, 18, 20]

// function for BubbleSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length-1; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr;
}

// function to Merge arrays without using Extra space

function mergeTwoArrays(a, b) {
    let i = 0;
    let j = 0;
    while (i < a.length) {
        if (a[i] > b[j]) {
            let temp = a[i]
            a[i] = b[j]
            b[j] = temp
            i++
            bubbleSort(b)
        }
        else {
            i++;
        }
    }
    return {
        arr1: a,
        arr2:b,
    }
}

// function call and output

console.log(mergeTwoArrays(arrayOne,arrayTwo));

