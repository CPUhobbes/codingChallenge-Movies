"use strict";

// Import packages
import localStorage from 'localStorage';
import MovieModel from "./../models/movieModel";

//Seeded movieList from "model"
let dummyList = MovieModel;


// Storage functions
const movieController = {

	addMovie: (movie) => {
		movie.id=dummyList.length;
		dummyList.push(movie);
	},

	deleteMovie: (id) => {

		_.remove(dummyList, (ele) => {
  			return ele.id === id;
		});

		return dummyList;

	},
	  
	editMovie: (movie) => {
		
		console.log(movie);
	},

	getMovies: () => {
		return dummyList;
	}

};

// We export the helpers function (which contains getGithubInfo)
export default movieController;