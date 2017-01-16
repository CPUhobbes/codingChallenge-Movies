"use strict";

// Import packages
import React from "react";
import MovieController from "./../../controllers/movieController";

// AddMovie class component
class AddMovie extends React.Component {
  	constructor(props) {
		super(props);

		this.state = {
			id:null,
			title: null,
			year:null,
			genre:null,
			rating:null,
			actors:null,
			edit:false
		};

		//Bind functions here
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.resetMessage = this.resetMessage.bind(this);
  	}

  	//Other functions here
  	componentWillMount() {
  	 	this.setState({ id: this.props.getCounter()});
  	 }

  	//Submit data to MovieController
  	handleSubmit(event){
  		event.preventDefault(); //Prevent refresh
  		this.props.updateList(MovieController.addMovie(this.state));

  		//Reset current state
  		this.setState({ id: this.props.getCounter()});
        this.setState({ title: null });
        this.setState({ year: null });
        this.setState({ genre: null });
        this.setState({ rating: null });
        this.setState({ actors: null });

        let resetForm = document.getElementById("movieForm");
		resetForm.reset();

		document.getElementById("movieAdded").innerHTML = "<div class=\"alert alert-success\" role=\"alert\">Movie has been Added!</div>";
  	}

  	//Update state object based on active input field
  	handleChange(event){

  		let newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
  	}

  	resetMessage(){
  		document.getElementById("movieAdded").innerHTML ="";
  	}

	//Render info to page
	render() {

		return(
			
				<div className="container">
					<div className="row">
				  		<div className="Absolute-Center">
							<div className="jumbotron">
								<h1>Add a Movie</h1>
								<form onSubmit={this.handleSubmit} onChange={this.handleChange} id="movieForm" data-toggle="validator" role="form" onFocus={this.resetMessage}>
									<div className="form-group">
    									<label htmlFor="title">Title</label>
									    <input type="text" className="form-control" id="title" placeholder="Movie Title" required />
									</div>
									<div className="form-group">
    									<label htmlFor="year">Year</label>
									    <input type="number" className="form-control" id="year" placeholder="Movie Year" required />
									</div>
									<div className="form-group">
    									<label htmlFor="genre">Genre</label>
									    <input type="text" className="form-control" id="genre" placeholder="Movie Genre" required />
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
									    <input type="text" className="form-control" id="actors" placeholder="Movie Actors" required />
									</div>
									<div className="form-group">
									    <div className="text-center">
									    	<button type="submit" className="btn btn-default">Add Movie!</button>
									    </div>
									</div>
								</form>
								<div id='movieAdded'></div>
							</div>
				  		</div>
					</div>
				</div>	
			
		)
	}
}

export default AddMovie;