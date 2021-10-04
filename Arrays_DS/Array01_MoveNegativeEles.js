// Move all negative elements to one side of the array.
// Input --> -12,11,-13,-5,6,-7,5,-3,6;

const array = [-12, 11, -13, -5, 6, -7, 5, -3, 6]

// Function to move all negative elements to one side of the array

function moveNegativeElements(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if (arr[i] < 0) {
            i++;
        }
        else if (arr[i] > 0 && arr[j] < 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
        else {
            j--;
        }
    }
    return arr;
}

// function call and the output.
console.log(moveNegativeElements(array))