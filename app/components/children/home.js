"use strict";

// Import packages
import React from "react";
import Storage from ".././utils/storage";

// Home class component
class Home extends React.Component {
  	constructor(props) {
		super(props);

		this.state = {
			
		};

		//Bind functions here
  	}

  	//Other functions here
  	editMovie(id){
  		console.log("edit"+id);


  	}

  	deleteMovie(id){
  		this.props.updateList(Storage.deleteMovie(id));
  		//console.log("delete"+id);


  	}

	//Render info to page
	render() {
		let movieList = this.props.getList();

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
export default Home;
