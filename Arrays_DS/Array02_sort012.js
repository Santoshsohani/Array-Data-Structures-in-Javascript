// Sort 012 in an array.

const array = [1,2,0,0,2,1,0,1,1,0,2,1,0,1];

// function to sort012

function sort012(arr) {
    let l = 0;
    let d = 0;
    let h = arr.length - 1;

    while (d < h) {
        if (arr[d] == 0) {
            let temp = arr[d];
            arr[d] = arr[l];
            arr[l] = temp;
            l++;
            d++;
        }
        else if (arr[d] == 2) {
            let temp = arr[d];
            arr[d] = arr[h];
            arr[h] = temp;
            h--;
        }
        else {
            d++;
        }
    }
    return arr;
}


// Function call and output.
console.log(sort012(array));