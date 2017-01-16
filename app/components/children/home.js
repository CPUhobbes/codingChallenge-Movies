"use strict";

// Import packages
import React from "react";
import MovieController from "./../../controllers/movieController";

// Home class component
class Home extends React.Component {
  	constructor(props) {
		super(props);
		this.state = {
			id:null,
			title: null,
			year:null,
			genre:null,
			rating:null,
			actors:null
			//edit not needed since value is already determined

		};

		//Bind functions here
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
  	}

  	 componentWillMount() {
  	 	
  	 }

  	 handleChange(event){
  		let newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
  	}

  	handleSubmit(event){
  		event.preventDefault(); //Prevent refresh
  		this.props.updateList(MovieController.editMovie(this.state));

  		//Reset current state
  		this.setState({ id: null });
        this.setState({ title: null });
        this.setState({ year: null });
        this.setState({ genre: null });
        this.setState({ rating: null });
        this.setState({ actors: null });

  	}

  	//Other functions here

  	editMovie(id){
  		this.state.id = id;
		this.props.updateList(MovieController.updateEditState(id));
  	}

  	undoEditMovie(id){
  		this.state.id = null;
		this.props.updateList(MovieController.undoEditState(id));
  	}

  	deleteMovie(id){
  		this.props.updateList(MovieController.deleteMovie(id));
  	}

  	/*
  	 * 	Seeding Functions
  	 */

  	seedMovies(){
  		let movies = MovieController.seedMovies();
  		
  		this.props.updateList(movies);
  		this.props.setCounter(movies.length);
  	}

  	deleteAll(){
  		let temp = MovieController.deleteAll();
  		this.props.updateList(temp);
  	}



  	renderFields(item){
  		if(!item.edit){
	 		return (<div>
	 			<div className = "col-md-3"><h5>{item.title}</h5></div>
	 			<div className = "col-md-1"><h5>{item.year}</h5></div>
		  		<div className = "col-md-1"><h5>{item.rating}</h5></div>
		  		<div className = "col-md-5"><h5>{item.actors}</h5></div>
		  		<div className = "col-md-2">
		  			<button className="btn btn-primary" onClick={()=>this.editMovie(item.id)}>Edit</button>
					<button className="btn btn-danger" onClick={()=>this.deleteMovie(item.id)}>Delete</button>
		  		</div>
	  		</div>);
		}
		else{
			return (<div>
				<form onSubmit={this.handleSubmit} onChange={this.handleChange} id="movieForm">
				<div className = "col-md-3"><input type="text" className="form-control" id="title" defaultValue={item.title} /></div>
	 			<div className = "col-md-1"> <input type="text" className="form-control" id="year" defaultValue={item.year} /></div>
		  		<div className = "col-md-1"> <input type="text" className="form-control" id="rating" defaultValue={item.rating} /></div>
		  		<div className = "col-md-5"><input type="text" className="form-control" id="actors" defaultValue={item.actors} /></div>
		  		<div className = "col-md-2">
		  			<button type="submit" className="btn btn-success">Save</button>
		  			<button className="btn btn-danger" onClick={()=>this.undoEditMovie(item.id)}>Undo</button>
	  			</div>
	  			</form>
			</div>);
		}
  	}

	//Render info to page
	render() {

		const rowBuffer = {margin: '10px 0px'};


		let movieList= this.props.getList();
		//console.log(this.props.getList());
		return(
			
				<div className="container">
					<div className="row">
				  		<div className="Absolute-Center">
							<div className="jumbotron">
								  <h1>Movie List</h1>
								  <div className="row" style={rowBuffer}>
								  		<div className = "col-md-3"> <h3>TITLE</h3></div>
							 			<div className = "col-md-1"> <h3>YEAR</h3></div>
								  		<div className = "col-md-1"> <h3>RATING</h3></div>
								  		<div className = "col-md-5"> <h3>ACTORS</h3></div>
								  		<div className = "col-md-2"> </div>

								  </div>
								 <div> {
								 	/* loop to print out all object in movieList */
								 	movieList.map(function(item, index){								 		
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
					<button className="btn btn-success" onClick={()=>this.seedMovies()}>SEED DB</button>
					<button className="btn btn-danger" onClick={()=>this.deleteAll()}>DELETE ALL</button>
				</div>	
			
		);
	}
}
// Export the component back for use in other files
export default Home;
