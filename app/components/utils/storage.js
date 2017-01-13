"use strict";

// Import packages
import localStorage from 'localStorage';

// Storage functions
const storage = {

	addMovie: movie => {
		console.log(movie);
	},

	deleteMovie: (movie) => {

	},
	  
	editMovie: (movie) => {

	},

	getMovies: () => {
		return {testing:"123"};
	}

};

// We export the helpers function (which contains getGithubInfo)
export default storage;