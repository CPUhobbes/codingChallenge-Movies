"use strict";

import React from "react";
import MovieController from "./../../controllers/movieController";

// Load the full build.
const _ = require('lodash');

class Search extends React.Component {
  	constructor(props) {
		super(props);

		this.state = {
			searchTitle: "",
			searchResults:[]
		};

		//Bind functions here
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
  	}

  	handleSubmit(event){
  		event.preventDefault(); //Prevent refresh
  		let movieList = this.props.getList();
  		//this.setState({ id: movieList.length});

        let resetForm = document.getElementById("movieForm");
		resetForm.reset();
		this.setState({searchResults: _.filter(movieList, {'title': this.state.searchTitle})});
  	}

  	handleChange(event){
  		let newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
  	}

  	editMovie(id){
  		console.log("edit"+id);


  	}

  	deleteMovie(id){

  		this.props.updateList(MovieController.deleteMovie(id));
  		//console.log("delete"+id);
  		_.remove(this.state.searchResults, (ele) => {
  			return ele.id === id;
		});
		this.setState({searchResults: this.state.searchResults})


  	}

  	//Other functions here

	//Render info to page
	render() {

		return(
			
				<div className="container">
					<div className="row">
				  		<div className="Absolute-Center">
							<div className="jumbotron">
								<h1>Search Movies</h1>
						  		<form onSubmit={this.handleSubmit} onChange={this.handleChange} id="movieForm">
									<div className="form-group">
										<label htmlFor="title">Search Title</label>
							    		<input type="text" className="form-control" id="searchTitle" placeholder="Movie Title" />
									</div>
									<div className="form-group">
									    <div className="">
									    	<button type="submit" className="btn btn-default">Search Movie</button>
									    </div>
									</div>
								</form>
								<div className="row">
									<div className="col-md-12">
										--------------------------------------
									</div>
								</div>
								<div> {

								 	/* loop to print out all object in movieList */
								 	this.state.searchResults.map(function(item, index){
								  	return <div key = {index}>

									  	<div className="row">
									  		<div className = "col-md-3"> {item.title}</div>
									  		<div className = "col-md-1"> {item.year}</div>
									  		<div className = "col-md-1"> {item.genre}</div>
									  		<div className = "col-md-1"> {item.rating}</div>
									  		<div className = "col-md-3"> {item.actors}</div>
									  		<div className = "col-md-3"> 
									  			<button className="btn btn-primary" onClick={()=>this.editMovie(item.id)}>Edit</button>
									  			<button className="btn btn-danger" onClick={()=>this.deleteMovie(item.id)}>Delete</button>
									  		</div>
									  	</div>
									</div>
								  }, this)} </div>

							</div>
				  		</div>
					</div>
				</div>	
			
		)
	}
}
// Export the component back for use in other files
export default Search;