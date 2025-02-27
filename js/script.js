"use strict";
// alert("Я JavaScript!");
// alert("Я JavaScript тоже!");
// let admin;
// let userName = "Джон";
// admin = userName;
// alert(admin);
// const myArray = ['Маша', 'Саша', 'Даша', 'Паша'];
// console.log(myArray[3]);

// const Ira = {
//     Паша: 1000,
//     Маша: 500,
//     Саша: 180,
//     Юля: 18000
// }
// console.log(Ira.Паша);
// console.log(Ira['Юля']);
// Ira.Вадим = 2850;
// console.log(Ira['Вадим']);
let result = [];
result[0] = prompt('Как тебя зовут?', '');
result[1] = prompt('Как твоя Фамилия?', '');
result[2] = prompt('Сколько тебе лет?', '');
result[3] = prompt(`Где ты живешь ${result[0]}?`, ``);

document.write(result);

let num = 10;

// console.log(num++);
// console.log(++num);
console.log(num -= 5);