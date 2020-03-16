//STEP 1
// let favMovies = ["Dirty dancing", "The Gentlemen", "It", "The Thing", "James Bond"];
// window.console.log(favMovies[1]);

//STEP 2
// let movies = new Array(5);
// movies[0] = "Dirty dancing";
// movies[1] = "The Gentlemen";
// movies[2] = "It";
// movies[3] = "The Thing";
// movies[4] = "James Bond";
// window.console.log(movies[0]);

//STEP 3
// let movies = new Array(5);
// movies[5] = "Doctor Sleep";
// window.console.log(movies.length);

//STEP 4
// let movies = [];
// movies[0] = "Dirty dancing";
// movies[1] = "The Gentlemen";
// movies[2] = "It";
// movies[3] = "The Thing";
// movies[4] = "James Bond";
// delete movies[0];
// for (movie of movies) {
//     window.console.log(movie);// read more about for loop
// }

//STEP 5
// let i;
// let movies = [];
// movies[0] = "Dirty dancing";
// movies[1] = "The Gentlemen";
// movies[2] = "It";
// movies[3] = "The Thing";
// movies[4] = "James Bond";
// movies[5] = "Matrix";
// movies[6] = "Titanic";
// for (i = 0; i < movies.length; i++) {
//     window.console.log(movies[i]);
// }

//STEP 6
// let i;
// let movies = [];
// movies[0] = "Dirty dancing";
// movies[1] = "The Gentlemen";
// movies[2] = "It";
// movies[3] = "The Thing";
// movies[4] = "James Bond";
// movies[5] = "Matrix";
// movies[6] = "Titanic";
// for (i in movies) {
//     window.console.log(movies[i]);
// }

//STEP 7
// let i;
// let movies = [];
// movies[0] = "Dirty dancing";
// movies[1] = "The Gentlemen";
// movies[2] = "It";
// movies[3] = "The Thing";
// movies[4] = "James Bond";
// movies[5] = "Matrix";
// movies[6] = "Titanic";
// movies.sort();
// for (i in movies) {
//     window.console.log(movies[i]);
// }

//STEP 8
// let i;
// let movies = [];
// movies[0] = "Dirty dancing";
// movies[1] = "The Gentlemen";
// movies[2] = "It";
// movies[3] = "The Thing";
// movies[4] = "James Bond";
// movies[5] = "Matrix";
// movies[6] = "Titanic";

// let leastFavMovies = [];
// leastFavMovies[0] = "Ultraviolet";
// leastFavMovies[1] = "Scary Movie";
// leastFavMovies[2] = "Catwoman";

// window.console.log("Movies I like:");
// window.console.log("");
// for (i in movies) {
//     window.console.log(movies[i]);
// }
// window.console.log("");
// window.console.log("Movies I regret watching:");
// window.console.log("");
// for (i in leastFavMovies) {
//     window.console.log(leastFavMovies[i]);
// }

//STEP 9    
// let movies = [];
// movies[0] = "Dirty dancing";
// movies[1] = "The Gentlemen";
// movies[2] = "It";
// movies[3] = "The Thing";
// movies[4] = "James Bond";
// movies[5] = "Matrix";
// movies[6] = "Titanic";
// let leastFavMovies = [];
// leastFavMovies[0] = "Ultraviolet";
// leastFavMovies[1] = "Scary Movie";
// leastFavMovies[2] = "Catwoman";
// movies = movies.concat(leastFavMovies);
// movies.reverse();
// for (i in movies) {
//     window.console.log(movies[i]);
// }

//STEP 10
// let movies = [];
// movies[0] = "Dirty dancing";
// movies[1] = "The Gentlemen";
// movies[2] = "It";
// movies[3] = "The Thing";
// movies[4] = "James Bond";
// movies[5] = "Matrix";
// movies[6] = "Titanic";
// let leastFavMovies = [];
// leastFavMovies[0] = "Ultraviolet";
// leastFavMovies[1] = "Scary Movie";
// leastFavMovies[2] = "Catwoman";
// movies = movies.concat(leastFavMovies);
// window.console.log(movies.pop());
// window.console.log(movies[movies.length - 1]);   //not a method

//STEP 11
// let movies = [];
// movies[0] = "Dirty dancing";
// movies[1] = "The Gentlemen";
// movies[2] = "It";
// movies[3] = "The Thing";
// movies[4] = "James Bond";
// movies[5] = "Matrix";
// movies[6] = "Titanic";
// let leastFavMovies = [];
// leastFavMovies[0] = "Ultraviolet";
// leastFavMovies[1] = "Scary Movie";
// leastFavMovies[2] = "Catwoman";
// movies = movies.concat(leastFavMovies);
// window.console.log(movies.shift());

//STEP 12
// let movies = [];
// movies[0] = "Dirty dancing";
// movies[1] = "The Gentlemen";
// movies[2] = "It";
// movies[3] = "The Thing";
// movies[4] = "James Bond";
// movies[5] = "Matrix";
// movies[6] = "Titanic";
// let leastFavMovies = [];
// leastFavMovies[0] = "Ultraviolet";
// leastFavMovies[1] = "Scary Movie";
// leastFavMovies[2] = "Catwoman";
// movies = movies.concat(leastFavMovies);

//STEP 13
// let employee1 = [];
// employee1["id1"] = 4235;
// employee1["name1"] = "Test Smith";
// employee1["title1"] = "Web Developer";
// employee1["department1"] = "Engineering";
// employee1["isCurrent1"] = false;
// let employee2 = [];
// employee2["id2"] = 4170;
// employee2["name2"] = "Maria Okhota";
// employee2["title2"] = "QA";
// employee2["department2"] = "Engineering";
// employee2["isCurrent2"] = true;
// let employees = employee1.concat(employee2);

//STEP 14


//STEP 15

//STEP 16
// let names = [];
// let movies = [["Dirty dancing", 5], ["It", 3], ["The Gentlemen", 4], ["The Thing", 1], ["James Bond", 2]];
// for (let i = 0; i < movies.length; i++) {
//     names[i] = movies[i].filter(function (item) {
//     return typeof item === "string";
//     });
    
// }
// for (title of names) {
//     window.console.log(title);
// }

//STEP 17

//STEP 18

//STEP 19

//STEP 20
// let numbers = [1, 5, 3, 7];
// let max = Math.max.apply(null, numbers);
// window.console.log(max);