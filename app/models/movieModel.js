"use strict";

function Movie(id, title, year, genre, rating, actors, edit){
	this.id = id;
	this.title = title;
	this.year = year;
	this.genre = genre;
	this.rating = rating;
	this.actors = actors;
	this.edit = edit;
}



//Seeded Movie List
let seedList = [
	new Movie(0, "Indiana Jones", "1983", "Adventure", 5, ["Harrison Ford"], false),
	new Movie(1, "Star Wars", "1978", "Sci Fi", "4", ["James Earl Jones"], false),
	new Movie(2, "Top Gun", "1986", "Action", "3", ["Tom Cruise"], false),
	new Movie(3, "Total Recall", "1986", "Sci Fi", "3", ["Arnold Schwarzenegger"], false),
	new Movie(4, "Total Recall", "2012", "Sci Fi", "2", ["Colin Farrell"], false)
];

export default seedList;