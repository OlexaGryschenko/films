const numberOfFilms = +prompt('Сколько фильмов ви уже просмотрели', '');
const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
private: false
};

// const a = prompt('Один из просмотренних фильмов?', ''),
   const  b = prompt('На сколько оцените его?'), 
    c = prompt('Один из просмотренних фильмов?', ''),
    d = prompt('На сколько оцените его?');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
