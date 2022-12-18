// let numberOfFilms;

// function start(){
    
//     numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

//     while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){

//         numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
//     }
   
// }

// start();


const personalMovieDB = {
    count: 0,
    numberOfFilms: function(){
      let numberFilms = +prompt("Сколько фильмов вы посмотрели?", "").trim();
          personalMovieDB.count = numberFilms;
      while(numberFilms == "" || numberFilms == null || isNaN(numberFilms)){
        numberFilms = +prompt("Сколько фильмов вы посмотрели?", "");
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
    },
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat == false){
            console.log(personalMovieDB);
        } else {
            console.log("доступ закрыт!");
        }
    },

    writeYourGenres: function(){
        for(let i = 1; i <= 3; i++){
            let genresWrite = prompt(`Ваш любимый жанр под номером ${i}`);


            if(genresWrite == "" || genresWrite == null){
                genresWrite = prompt(`Ваш любимый жанр под номером ${i}`);
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genresWrite;
            }
        }
        
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жинр № ${i + 1} - ${item}`);
            
        });
    }
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

console.log(personalMovieDB);


// function showMyDB(){
//     if(personalMovieDB.privat == false){
//         console.log(personalMovieDB);
//     } else {
//         console.log("Доступ закрыт");
//     }

// }   


   



