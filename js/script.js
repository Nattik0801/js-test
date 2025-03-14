"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
};

start(); //вызвали функцию, записанную ранее

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// первый урок 
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

//  второй урок мой вариант


// мой вариант
// for (let i = 1; i <= numberOfFilms; i++) {
//     let n = prompt('Один из последних просмотренных фильмов?', '');
//     let lengthNameFilm = n.length;
//     while (!lengthNameFilm || lengthNameFilm > 10) {
//         alert('Ваш ответ не корректен, пожалуйста, еще раз ответьте на вопрос');
//         n = prompt('Один из последних просмотренных фильмов?', '');
//         lengthNameFilm = n.length;
//     }
//     let m = prompt('На сколько оцените его?', '');

//     personalMovieDB.movies[n] = m;

// }



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        }
        else {
            alert('Некорректный ответ');
            i--
        }

    };
}
rememberMyFilms();
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    };
};

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
};

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
    }
};

writeYourGenres();

// console.log(personalMovieDB);


