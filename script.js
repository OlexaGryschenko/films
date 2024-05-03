const numberOfFilms = +prompt('Сколько фильмов ви уже просмотрели', '');
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

console.log(personalMovieDB);
