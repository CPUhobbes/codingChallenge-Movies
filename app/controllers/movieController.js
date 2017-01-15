"use strict";

// Import packages
import localStorage from 'localStorage';
import MovieModel from "./../models/movieModel";

//Seeded movieList from "model"
let movieList = MovieModel;


//Find Movie Index Helper Function
function findMovieIndex(id){
		
	return _.findIndex(movieList, {'id': id});
}

// Storage functions
const movieController = {

	addMovie: (movie) => {
		movie.id=movieList.length;
		movieList.push(movie);
	},

	deleteMovie: (id) => {

		_.remove(movieList, (ele) => {
  			return ele.id === id;
		});

		return movieList;

	},
	  
	editMovie: (movie) => {
		let index = findMovieIndex(movie.id);
		let editFields = _.omitBy(movie, _.isNull);

		//Verify edit was made
		//console.log(_.assign(movieList[index], editFields));

		movieList[index].edit= false;
		return movieList;
	},

	updateEditState:(id) =>{
		
		movieList[findMovieIndex(id)].edit= true;
		return movieList;
	},

	undoEditState:(id) =>{
		
		movieList[findMovieIndex(id)].edit= false;
		return movieList;
	},

	getMovies: () => {
		return movieList;
	}
};

// We export the helpers function (which contains getGithubInfo)
export default movieController;