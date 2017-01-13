"use strict";

// Import packages
import React from "react";

// Home class component
class Home extends React.Component {
  	constructor(props) {
		super(props);

		this.state = {
			
		};

		//Bind functions here
  	}

  	//Other functions here

	//Render info to page
	render() {
		let movieList = this.props.getList();

		return(
			
				<div className="container">
					<div className="row">
				  		<div className="Absolute-Center is-Responsive">
							<div className="jumbotron">
								  <h1>Movie List</h1>

								 <div> {
								 	
								 	/* loop to print out all object in movieList */
								 	movieList.map(function(item, index){
								  	return <div key = {index}>{item.title}</div>

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
