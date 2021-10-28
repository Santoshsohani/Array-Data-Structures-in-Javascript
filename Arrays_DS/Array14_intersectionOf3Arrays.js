// Intersection of three sorted arrays.

const array1 = [1, 5, 10, 20, 40, 80]
const array2 = [6, 7, 20, 80, 100]
const array3 = [3, 4, 5, 20, 30, 70, 80]

// function to find intersection of Two arrays.

function intersectionTwoArrays(a, b) {
    const newArray = []
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                newArray.push(a[i])
            }
        }
    }
    return newArray
}

// function to find Intersection of three sorted arrays.

function intersectionOf3Arrays(a, b, c) {
    const firstReturn = intersectionTwoArrays(a, b)
    return intersectionTwoArrays(firstReturn, c)
}

// function call and output.

console.log(intersectionOf3Arrays(array1, array2, array3));
