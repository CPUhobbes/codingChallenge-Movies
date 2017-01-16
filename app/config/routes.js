"use strict";

// Include packages
const React = require("react");
const router = require("react-router");

// Route component for displaying individual routes
const Route = router.Route;

// Router component to contain all Routes
const Router = router.Router;

// hashHistory prop to handle routing client side without a server
const hashHistory = router.hashHistory;

// IndexRoute (catch-all route)
const IndexRoute = router.IndexRoute;

// Add Components
import Main from "../components/main";
import Home from "../components/children/home";
import Search from "../components/children/search";
import Add from "../components/children/add";


module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>
    	<IndexRoute component={Home} />

    <Route path='/add' component={Add} />
    
    <Route path='/search' component={Search} />
    
    </Route>
  </Router>
);