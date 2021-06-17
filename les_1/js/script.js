'use strict';
let numberOfFilms;
function start(){
    while(  numberOfFilms == "" || 
            numberOfFilms == null || 
            isNaN(numberOfFilms)){
                numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?","");
            }
}
//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false};

let a,b;
function rememberMyFilms(){
    for(let i = 1; i <=2; i++){   
        do{
            a = prompt ("Один из последних просмотренных фильмов?","");
        }
        while(a == "" || a == null || a.length >10 );   
        do{
            b = +prompt ("На сколько оцените его","");
        }
        while(b == "" || b == null || isNaN(b) || b.length >10);
    
        personalMovieDB.movies[a] = b;
    }
}
//rememberMyFilms();

function writeYourGenres(){
    for(let i = 0; i <3; i++){   
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1} ?`,"");
    }
}
writeYourGenres();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 0 ){
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >=10 && personalMovieDB.count <=30 ){
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30 ){
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}
//detectPersonalLevel();

function showMyDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}
showMyDB();


//Проверить, чтобы все работало без ошибок в консоли
