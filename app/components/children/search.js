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
  		//console.log("delete"+id);
  		_.remove(this.state.search.searchResults, (ele) => {
  			return ele.id === id;
		});
		this.setState({search:{searchResults: this.state.search.searchResults}})

  	}

  	renderFields(item){
  		if(!item.edit){
	 		return (<div>
	 			<div className = "col-md-3" > <p>{item.title}</p></div>
	 			<div className = "col-md-1" > <p>{item.year}</p></div>
		  		<div className = "col-md-1" > <p>{item.rating}</p></div>
		  		<div className = "col-md-3" > <p>{item.actors}</p></div>
		  		<div className = "col-md-3">
		  			<button className="btn btn-primary" onClick={()=>this.editMovie(item.id)}>Edit</button>
					<button className="btn btn-danger" onClick={()=>this.deleteMovie(item.id)}>Delete</button>
		  		</div>
	  		</div>);
		}
		else{
			return (<div>
				<form onSubmit={this.handleEditSubmit} onChange={this.handleEditChange} id="movieForm">
				<div className = "col-md-3"> 
					<input type="text" className="form-control" id="title" defaultValue={item.title} />
				</div>
	 			<div className = "col-md-1"> <input type="text" className="form-control" id="yeaar" defaultValue={item.year} /></div>
		  		<div className = "col-md-1"> <input type="text" className="form-control" id="rating" defaultValue={item.rating} /></div>
		  		<div className = "col-md-3"> <input type="text" className="form-control" id="actors" defaultValue={item.actors} /></div>
		  		<div className = "col-md-3">
		  			<button type="submit" className="btn btn-success">Save</button>
		  			<button className="btn btn-danger" onClick={()=>this.undoEditMovie(item.id)}>Undo</button>
					
	  			</div>
	  			</form>
			</div>);
		}
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
								<div className="row">
									<div className="col-md-12">
										--------------------------------------
									</div>

								</div>
								<div> {

								 	/* loop to print out all object in movieList */
								 	this.state.search.searchResults.map(function(item, index){
								  	return <div key = {index}>
									  	<div className="row" id={"movie"+index}>
									  		{/*Render all fields based on edit value */}
									  		{this.renderFields(item)}  
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