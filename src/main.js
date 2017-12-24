import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Homepage from "./components/homepage";
import Searchpage from "./components/searchpage";
import Detailspage from "./components/detailspage";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Autopages</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/search">Search Results</NavLink></li>
            <li><NavLink to="/details">Vehicle Details</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Homepage}/>
            <Route path="/search" component={Searchpage}/>
            <Route path="/details" component={Detailspage}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
