// Union of two sorted arrays.

const array1 = [10, 20, 30, 40, 50, 90, 95, 100, 110, 120, 130];
const array2 = [10, 20, 45, 63, 80];


// function to find the union of two arrays.

function unionOfTwoArrays(a, b) {
    let i = 0;
    let j = 0;
    const union = [];
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            union.push(a[i]);
            i++;
        }
        else if (a[i] == b[j]) {
            union.push(a[i]);
            i++;
            j++;
        }
        else {
            union.push(b[j]);
            j++;
        }
    }

    while (i < a.length) {
        union.push(a[i]);
        i++;
    }
    while (j < b.length) {
        union.push(b[j]);
        j++;
    }

    return union;
}

// function call and the output.

console.log(unionOfTwoArrays(array1,array2));