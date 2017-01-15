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

  	deleteMovie(pos, id){
  		this.props.updateList(MovieController.deleteMovie(pos, id));
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
				<form onSubmit={this.handleSubmit} onChange={this.handleChange} id="movieForm">
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

	//Render info to page
	render() {

		let movieList= this.props.getList();
		
		return(
			
				<div className="container">
					<div className="row">
				  		<div className="Absolute-Center">
							<div className="jumbotron">
								  <h1>Movie List</h1>
								 <div> {
								 	/* loop to print out all object in movieList */
								 	movieList.map(function(item, index){								 		
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
			
		);
	}
}
// Export the component back for use in other files
export default Home;
