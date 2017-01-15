"use strict";

// Import packages
import React from "react";

import Index from "./children/home";
import Add from "./children/add";
import Search from "./children/search";

import MovieController from "./../controllers/movieController";

// Main class component
class Main extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			movieList: [],
			movieCounter: 0
		};

		//Bind functions here

		this.updateList = this.updateList.bind(this);
		this.getList = this.getList.bind(this);
		this.setCounter = this.setCounter.bind(this);
		this.getCounter= this.getCounter.bind(this);
	}

	//Other functions here

	updateList(movieList){
		this.setState({movieList: movieList});
		this.setState({movieCounter: this.state.movieCounter+=1});
	}
	setCounter(count){

		//Added function so state will update immediately
		this.setState({movieCounter:count}, () => {
			return null;
		});
	}

	getList(){
		return this.state.movieList;
	}
	getCounter(){
		return this.state.movieCounter;
	}

	componentWillMount(){
		let movies = MovieController.getMovies()
		this.state.movieList = movies;
		this.setCounter(movies.length);
	}

	render(){

		return(
			
			
			<div>
			{/* -- START OF RENDER -- */}

				{/* -- Main NAV BAR -- */}
				<nav className="navbar navbar-default navbar-static-top">
			      	<div className="container">
			        	<div className="navbar-header">
			          		<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					            <span className="sr-only">Toggle navigation</span>
					            <span className="icon-bar"></span>
					            <span className="icon-bar"></span>
					            <span className="icon-bar"></span>
			          		</button>
			          		<a className="navbar-brand" href="#">Movie Collection</a>
			        	</div>
			        	<div id="navbar" className="navbar-collapse collapse">
				          	<ul className="nav navbar-nav navbar-right">
					            <li className="active menuItem"> <a href="#/">Home</a></li>
					            <li className= "menuItem"> <a href="#/add">Add Movie</a></li>
					            <li className= "menuItem"> <a href="#/search">Search</a></li>					            
				          	</ul>
				        </div>
			      	</div>
			    </nav>

			    {React.cloneElement(this.props.children, {updateList:this.updateList, getList: this.getList, getCounter: this.getCounter, setCounter: this.setCounter})}
			
			{/* -- END OF RENDER -- */}
			</div>

		)	
	}
}

export default Main;