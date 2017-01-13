"use strict";

// Import packages
import localStorage from 'localStorage';

let dummyList = [{title:"Indiana Jones", year:"1983"}, {title:"Star Wars", year: "1978"}];
// Storage functions
const storage = {

	addMovie: (movie) => {
		dummyList.push(movie);
	},

	deleteMovie: (movie) => {
		

	},
	  
	editMovie: (movie) => {

	},

	getMovies: () => {
		return dummyList;
	}

};

// We export the helpers function (which contains getGithubInfo)
export default storage;