let  numberOfFilms; //глобально обявленная перемeнная, ее можно менять в зависимости от ввода

function start (){
    numberOfFilms = +prompt('Сколько фильмов ви уже просмотрели', '');
while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов ви уже просмотрели', '');
}

}
start();


const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
private: false
};

for (let i = 0; i < 2; i++){
    const  a = prompt('Один из последних просмотренних фильмов?', ''), 
    b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    }
    else{
        console.log('error');
        i = i - 1;
    }
}
if (personalMovieDB.count < 10)
{
    console.log("Просмотрено довольно мало фильмов");
}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Ви класичний користувач");}

    else if (personalMovieDB.count >= 30){
console.log("Kinoman");
    }
else {
    console.log("Mistake");
}
console.log(personalMovieDB);


