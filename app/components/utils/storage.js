"use strict";

// Import packages
import localStorage from 'localStorage';

let dummyList = [{id:0, title:"Indiana Jones", year:"1983", genre:"Adventure", rating: "5", actors:["Harrison Ford"]}, 
				{id:1, title:"Star Wars", year:"1978", genre:"Sci Fi", rating: "4", actors:["James Earl Jones"]},
				{id:2, title:"Top Gun", year:"1986", genre:"Action", rating: "3", actors:["Tom Cruise"]}];
// Storage functions
const storage = {

	addMovie: (movie) => {
		movie.id=dummyList.length;
		dummyList.push(movie);
	},

	deleteMovie: (id) => {

		if(id === dummyList[parseInt(id)].id){  //Verify that the id's match in case id mismatch
			dummyList.splice(id,1)
			console.log(dummyList.length)
		}
		return dummyList;

	},
	  
	editMovie: (movie) => {

	},

	getMovies: () => {
		return dummyList;
	}

};

// We export the helpers function (which contains getGithubInfo)
export default storage;