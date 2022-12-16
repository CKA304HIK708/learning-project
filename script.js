let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for( let i = 0; i < 2; i++){

     let showMovie = prompt("Один из последних просмотренных фильмов?", ""),
         metaScore = +prompt("На сколько оцениваете его?", "");

        personalMovieDB.movies[showMovie] = metaScore;

        if(showMovie && metaScore && showMovie.length < 50) {
        console.log("Готово");
        } else {
        console.log("Отмена");
        i--;
        }
}

if(personalMovieDB.count < 10){
    console.log("Просмотренно мало фильмов");
}else if(personalMovieDB.count >= 10 && personalMovieDB.count <=30){
    console.log("Классический зритель");
}else if(personalMovieDB.count > 30){
    console.log("Киноман");
}else{
    console.log("Ошибка");
}

    
    

   



