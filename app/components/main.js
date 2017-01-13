"use strict";

// Import packages
import React from "react";

import Index from "./children/home";
import Add from "./children/add";
import Search from "./children/search";

import Storage from "./utils/storage";

// Main class component
class Main extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			movieList: {}
		};
	}

	componentWillMount(){


	}

	render(){

		return(
			
			
			<div>
			{/* -- START OF RENDER -- */}

				{/* -- Main NAV BAR -- */}
				<nav className="navbar navbar-default navbar-static-top">
			      	<div className="container">
			        	<div className="navbar-header">
			          		<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					            <span className="sr-only">Toggle navigation</span>
					            <span className="icon-bar"></span>
					            <span className="icon-bar"></span>
					            <span className="icon-bar"></span>
			          		</button>
			          		<a className="navbar-brand" href="#">Movie Collection</a>
			        	</div>
			        	<div id="navbar" className="navbar-collapse collapse">
				          	<ul className="nav navbar-nav navbar-right">
					            <li className="active menuItem"> <a href="#/">Home</a></li>
					            <li className= "menuItem"> <a href="#/add">Add Movie</a></li>
					            <li className= "menuItem"> <a href="#/search">Search</a></li>					            
				          	</ul>
				        </div>
			      	</div>
			    </nav>

			    <div></div>

			    {React.cloneElement(this.props.children, {movieList:this.movieList})}
			
			{/* -- END OF RENDER -- */}
			</div>

		)	
	}
}

export default Main;