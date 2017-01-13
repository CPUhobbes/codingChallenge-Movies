"use strict";

// Import packages
import React from "react";
import Storage from ".././utils/storage";

// AddMovie class component
class AddMovie extends React.Component {
  	constructor(props) {
		super(props);

		this.state = {
			title: "",
			year:"",
			genre:"",
			rating:"",
			actors:[]
		};

		//Bind functions here
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
  	}

  	//Other functions here
  	handleSubmit(event){
  		event.preventDefault();
  		Storage.addMovie(this.state);
  		this.props.updateList(this.state);

  	}

  	handleChange(event){
  		let newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
  	}

	//Render info to page
	render() {

		return(
			
				<div className="container">
					<div className="row">
				  		<div className="Absolute-Center">
							<div className="jumbotron">
								<h1>Add a Movie</h1>
								<form onSubmit={this.handleSubmit} onChange={this.handleChange}>
									<div className="form-group">
    									<label htmlFor="title">Title</label>
									    <input type="text" className="form-control" id="title" placeholder="Movie Title" />
									</div>
									<div className="form-group">
    									<label htmlFor="year">Year</label>
									    <input type="number" className="form-control" id="year" placeholder="Movie Year" />
									</div>
									<div className="form-group">
    									<label htmlFor="genre">Genre</label>
									    <input type="text" className="form-control" id="genre" placeholder="Movie Genre" />
									</div>
									<div className="form-group">
    									<label htmlFor="rating">Rating (1-5)</label>
									    <select className="form-control" id="rating">
											<option>1</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
											<option>5</option>
										</select>
									</div>
									<div className="form-group">
    									<label htmlFor="actors">Actors</label>
									    <input type="text" className="form-control" id="actors" placeholder="Movie Actors" />
									</div>
									<div className="form-group">
									    <div className="text-center">
									    	<button type="submit" className="btn btn-default">Add Movie!</button>
									    </div>
									</div>
								</form>
							</div>
				  		</div>
					</div>
				</div>	
			
		)
	}
}
// Export the component back for use in other files
export default AddMovie;