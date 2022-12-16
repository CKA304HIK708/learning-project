let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let showMovie = prompt("Один из последних просмотренных фильмов?", ""),
    metaScore = +prompt("На сколько оцениваете его?", "");

    personalMovieDB.movies[showMovie] = metaScore;