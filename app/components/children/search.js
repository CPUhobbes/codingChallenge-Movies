"use strict";

import React from "react";

class Search extends React.Component {
  	constructor(props) {
		super(props);

		this.state = {
			searchTerm: "",
			startYear:"",
			endYear:"",
			numArticles:"5"
		};

		//Bind functions here
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
							</div>
				  		</div>
					</div>
				</div>	
			
		)
	}
}
// Export the component back for use in other files
export default Search;