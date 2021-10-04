// logically rotate an array by one.
// input --> 10,20,30,40,50;
// output --> 50,10,20,30,40;

const array = [10, 20, 30, 40, 50];

// function to logically rotate an array by one.

function rotateByone(arr) {
    let r = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = r;

    return arr;
}

// function call and the output.

console.log(rotateByone(array));