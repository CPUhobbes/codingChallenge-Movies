"use strict";

import React from "react";
import MovieController from "./../../controllers/movieController";
import Bacon from 'baconjs';

// Load the full build.
const _ = require('lodash');

class Search extends React.Component {
  	constructor(props) {
		super(props);

		this.state = {
			search:{
				searchTitle: "",
				searchResults:[]
			},
			edit:{
				id:null,
				title: null,
				year:null,
				genre:null,
				rating:null,
				actors:null
			}
			
		};

		//Bind functions here
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleEditSubmit= this.handleEditSubmit.bind(this);
		this.handleEditChange = this.handleEditChange.bind(this);
  	}

  	//Other functions here

  	handleSearchSubmit(event){
  		event.preventDefault(); //Prevent refresh
  		let movieList = this.props.getList();
        let resetForm = document.getElementById("movieForm");
		resetForm.reset();
		let query = this.state.search.searchTitle.toLowerCase(); //ignore case
		let results = _.filter(movieList, function(titles){
			let lower = titles.title.toLowerCase(); //ignore case
			return lower.indexOf(query) > -1;
		});
		this.setState({search:{searchResults:results}});
  	}

  	handleSearchChange(event){
  		let newState = this.state.search;
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
  	}



  	handleEditChange(event){
  		let newState = this.state.edit;
    	newState[event.target.id] = event.target.value;
    	this.setState({edit:newState});
  	}

  	handleEditSubmit(event){
  		event.preventDefault(); //Prevent refresh
  		this.props.updateList(MovieController.editMovie(this.state.edit));
  		console.log(this.state.edit);

  		//Reset current state
  		this.setState( {
				edit:{
					id:null,
					title: null,
					year:null,
					genre:null,
					rating:null,
					actors:null
				}
			});
  	}

  	editMovie(id){
  		this.state.edit.id = id;
		this.props.updateList(MovieController.updateEditState(id));
  	}

  	undoEditMovie(id){
  		this.state.id = null;
		this.props.updateList(MovieController.undoEditState(id));
  	}

  	deleteMovie(id){

  		this.props.updateList(MovieController.deleteMovie(id));
  		_.remove(this.state.search.searchResults, (ele) => {
  			return ele.id === id;
		});
		this.setState({search:{searchResults: this.state.search.searchResults}})
  	}

  	//Dynamically render all fields on to page
  	renderFields(item){
  		if(!item.edit){
	 		return (<div>
	 			<div className = "col-sm-3"><h5>{item.title}</h5></div>
	 			<div className = "col-sm-1"><h5>{item.year}</h5></div>
		  		<div className = "col-sm-1"><h5>{item.rating}</h5></div>
		  		<div className = "col-sm-5"><h5>{item.actors}</h5></div>
		  		<div className = "col-sm-2">
		  			<button className="btn btn-primary" onClick={()=>this.editMovie(item.id)}>Edit</button>
					<button className="btn btn-danger" onClick={()=>this.deleteMovie(item.id)}>Delete</button>
		  		</div>
	  		</div>);
		}
		else{
			return (<div>
				<form onSubmit={this.handleEditSubmit} onChange={this.handleEditChange} id="movieForm">
				<div className = "col-sm-3"> 
					<input type="text" className="form-control" id="title" defaultValue={item.title} />
				</div>
	 			<div className = "col-sm-1"> <input type="text" className="form-control" id="year" defaultValue={item.year} /></div>
		  		<div className = "col-sm-1"> <input type="text" className="form-control" id="rating" defaultValue={item.rating} /></div>
		  		<div className = "col-sm-5"> <input type="text" className="form-control" id="actors" defaultValue={item.actors} /></div>
		  		<div className = "col-sm-2">
		  			<button type="submit" className="btn btn-success">Save</button>
		  			<button className="btn btn-warning" onClick={()=>this.undoEditMovie(item.id)}>Undo</button>
					
	  			</div>
	  			</form>
			</div>);
		}
  	}

	//Render info to page
	render() {

		{/*css styles*/}
		const rowBuffer = {margin: '10px 0px'};
 
		return(
			
			<div className="container">
			{/* -- START OF RENDER -- */}
				<div className="row">
						<div className="jumbotron">
							<h1>Search Movies</h1>
							<div className="row" style={rowBuffer}>
					  		<form onSubmit={this.handleSearchSubmit} onChange={this.handleSearchChange} id="movieForm">
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
							
							<div className="row" style={rowBuffer}>
						  		<div className = "col-sm-3"> <h4>TITLE</h4></div>
					 			<div className = "col-sm-1"> <h4>YEAR</h4></div>
						  		<div className = "col-sm-1"> <h4>RATING</h4></div>
						  		<div className = "col-sm-5"> <h4>ACTORS</h4></div>
						  		<div className = "col-sm-2"> </div>
							</div>
							<div> {

							 	/* loop to print out all object in movieList */
							 	this.state.search.searchResults.map(function(item, index){
							  	return <div key = {index}>
								  	<div className="row" id={"movie"+index} style={rowBuffer}>
								  		{/*Render all fields based on edit value */}
								  		{this.renderFields(item)}  
									</div>
								</div>
							}, this)} </div>
						</div>
			  		</div>
				</div>

			{/* -- END OF RENDER -- */}	
			</div>	
		);
	}
}

export default Search;