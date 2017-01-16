"use strict";

// Import packages
import localStorage from 'localStorage';
import MovieModel from "./../models/movieModel";

//Seeded movieList from "model"
//let movieList = MovieModel;
//updateStorage();
let movieList = [];

try {
	movieList = JSON.parse(localStorage.getItem('db'));
	if(movieList===null){
		movieList = [];
	}
}
catch(err){
	console.log("Cannot read Data");
}

//let myValue = localStorage.getItem('myKey');
//console.log(JSON.parse(myValue));




/*
 *   Helper functions
 */

function findMovieIndex(id){
		
	return _.findIndex(movieList, {'id': id});
}

function updateStorage(){
	localStorage.setItem('db', JSON.stringify(movieList));
	console.log(movieList);
}


/*
 *   Movie Controller
 */

const movieController = {


	/*
	 *   CRUD functions
	 */ 

	addMovie: (movie) => {
		movieList.push(movie);
		updateStorage();
		return movieList;
	},

	deleteMovie: (id) => {

		_.remove(movieList, (ele) => {
  			return ele.id === id;
		});

		updateStorage();
		return movieList;

	},
	  
	editMovie: (movie) => {
		console.log(movie);
		let index = findMovieIndex(movie.id);
		let editFields = _.omitBy(movie, _.isNull);
		

		//Assign new object values
		console.log(_.assign(movieList[index], editFields));

		movieList[index].edit= false;
		updateStorage();
		return movieList;
	},

	getMovies: () => {
		return movieList;
	},


	/*
	 *   Edit state functions
	 */ 

	updateEditState:(id) =>{
		movieList[findMovieIndex(id)].edit= true;
		return movieList;
	},

	undoEditState:(id) =>{
		
		movieList[findMovieIndex(id)].edit= false;
		return movieList;
	},


	/*
	 *   Local storage functions
	 */ 

	seedMovies: () =>{
		movieList = MovieModel;
		localStorage.setItem('db', JSON.stringify(movieList));
		return movieList;
	},

	deleteAll:() =>{
		localStorage.clear();
		movieList =[];
		return movieList;
	}

};

export default movieController;