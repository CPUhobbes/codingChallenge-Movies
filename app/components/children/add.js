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
  	}

  	//Other functions here
  	handleSubmit(event){


  	}

	//Render info to page
	render() {

		return(
			
				<div className="container">
					<div className="row">
				  		<div className="Absolute-Center">
							<div className="jumbotron">
								<h1>Add Movies</h1>
								<form onSubmit={this.handleSubmit}>

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