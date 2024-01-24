const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
console.log(arr);
printArray(arr);
bubbleSort(arr);
printArray(arr);
console.log(arr);
let index = binarySearch(arr, 5);
console.log(`index = ${index}`);
index = binarySearch(arr, 7);
console.log(`index = ${index}`);
const arr1 = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
sort(arr1,comparator);
console.log(arr1);




function printArray(arr) {
    console.log('====================');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('====================');
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
}


function sort(arr, comparator) {
    let b;
    do {
        b = false;
        for (let i = 0; i < arr.length; i++) {
            if (comparator(arr[i], arr[i + 1]) === 1) {
                let t = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = t;
                b = true;
            }
        }
    } while (b)
}

function comparator(a, b) {
    if (a === b) {
        return 0;
    }
    if (a - b > 0) {
        return 1;
    }
    return -1;
}



function binarySearch(arr, value) {
    let leftI = 0;
    let rightI = arr.length - 1;
    while (leftI <= rightI) {
        let middleI = mid(leftI, rightI);
        if (value === arr[middleI]) {
            return middleI;
        }
        if (value < arr[middleI]) {
            rightI = middleI - 1;
        }
        else {
            leftI = middleI + 1;
        }
    }
    return -rightI - 1
}

function mid(a, b) {
    let rest = (a + b) % 2;
    if (rest) {
        middleI = (b + a + 1) / 2;
    }
    else {
        middleI = (b + a) / 2;
    }
    return middleI;
}


