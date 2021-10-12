// Merge intervals

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non - overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [[1, 6], [8, 10], [15, 18]]
// Explanation: Since intervals[1, 3] and[2, 6] overlaps, merge them into[1, 6].

// Example 2:
// Input: intervals = [[1, 4], [4, 5]]
// Output: [[1, 5]]
// Explanation: Intervals[1, 4] and[4, 5] are considered overlapping.

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]

// function to Delete an element in an array.

function deleteElement(arr, pos) {
    for (let i = pos; i < arr.length; i++){
        arr[i] = arr[i+1]
    }
    return arr
}

// function to Merge Intervals

function mergeIntervals(arr) {
    let end = 1
    let start = 0
    let size = arr.length
    for (let i = 0; i < size-1; i++){
        for (let j = i + 1; j < size; j++){
            if (arr[i][end] > arr[j][0]) {
                if (arr[i][end] < arr[j][end]) {
                    arr[i][end] === arr[j][end]
                    deleteElement(arr, j)
                    deleteElement(arr, arr.length - 1)

                } else {
                    deleteElement(arr,j)
                }
            }
            else {
                continue
            }
        }
    }
    return arr
}

// console.log(mergeIntervals(intervals));

console.log(mergeIntervals(intervals));



