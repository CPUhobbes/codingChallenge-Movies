"use strict";

// Import packages
import React from "react";
import MovieController from "./../../controllers/movieController";

// Home class component
class Home extends React.Component {
  	constructor(props) {
		super(props);
		this.state = {
			id:"",
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

  	 componentWillMount() {
  	 	
  	 }

  	 handleChange(event){
  		let newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
  	}

  	handleSubmit(event){
  		event.preventDefault(); //Prevent refresh
  		let movieList = this.props.getList();
  		this.setState({ id: movieList.length});
  		MovieController.editMovie(this.state);

  		//Reset current state
  		this.setState({ id: "" });
        this.setState({ title: "" });
        this.setState({ year: "" });
        this.setState({ genre: "" });
        this.setState({ rating: "" });
        this.setState({ actors: [] });

  	}

  	//Other functions here

  	editMovie(id){
  		let stateCopy =  this.props.getList();

		stateCopy[id].edit=true;  //Change edit field to update state
		this.props.updateList(stateCopy);
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
	 			<div className = "col-md-1"> <input type="text" className="form-control" id="title" defaultValue={item.year} /></div>
		  		<div className = "col-md-1"> <input type="text" className="form-control" id="title" defaultValue={item.rating} /></div>
		  		<div className = "col-md-3"> <input type="text" className="form-control" id="title" defaultValue={item.actors} /></div>
		  		<div className = "col-md-3">
		  			<button type="submit" className="btn btn-success">Save</button>
					
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
