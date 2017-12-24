import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Homepage from "./components/homepage";
import Searchpage from "./components/searchpage";
import Detailspage from "./components/detailspage";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Autopages</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/search">Search Results</NavLink></li>
            <li><NavLink to="/details">Vehicle Details</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/search" component={Searchpage}/>
            <Route exact path="/search/:page/:minPrice/:maxPrice" component={Searchpage}/>
            <Route exact path="/search/:page/:minPrice/" component={Searchpage}/>
            <Route exact path="/search/:page/" component={Searchpage}/>
            <Route exact path="/details" component={Detailspage}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
