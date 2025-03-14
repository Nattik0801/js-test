"use strict";


let num = 2;

for (i = 2; i <= 10; i = i + 2) {
    console.log(num);
    num += 2;
};

for (let i = 20; i >= 10; i--) {
    console.log(i);
    if (i <= 13) {
        break
    };

};

for (let i = 2; i <= 10; i += 2) {
    console.log(i);

};

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;

while (i <= 16) {
    // if (i % 2 === 0) {
    //     continue;
    // } else {
    console.log(i);
    // };
    i++;
}

let i = 2;
while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
};

const arrayOfNumbers = [];
for (let i = 0; i <= 5; i++) {
    arrayOfNumbers[i] = i + 5;
};

console.log(arrayOfNumbers);

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

console.log(arr.length);

const NumberOfItems = arr.length;

for (let i = 0; i < NumberOfItems; i++) {
    result[i] = arr[i];
};
console.log(result);

const data = [5, 10, 'Shopping', 20, 'Homework'];

// console.log (typeof (data[2]));

const NumberOfItems = data.length;

for (let i = 0; i < NumberOfItems; i++) {

    let typeItem = typeof (data[i]);

    if (typeItem == 'number') {
        data[i] *= 2;
    } else if (typeItem == 'string') {
        data[i] += ' - done'
    };
}
console.log(data);

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

const NumberOfItems = data.length;
for (let i = 0; i < NumberOfItems; i++) {
    result[i] = data[NumberOfItems - (i + 1)]
};
console.log(result);
///////////////
const lines = 5;
let result = '';

// result = '*';
for (let i = 0; i < lines + 1; i++) {

    for (let j = 0; j <= lines + i; j++) {
        if (j < (lines - i)) {
            result += ' ';
        }
        else if (j >= lines + i) {
            result += '*';
        }
        else {
            result += '*'
        }

    };

    result += '\n'

};

console.log(result);


for (let i = 1; i < 7; i++) {

    for (let j = 0; j < i; j++) {
        result += '*';

    };

    result += '\n'

};

console.log(result);

/////
function calc(a, b) {
    console.log(a + b);

};
calc('fg', 'sdf');

let calc1 = (a, b) => {
    console.log(a + b)
};
calc1(5, 5);
