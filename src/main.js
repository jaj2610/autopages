import React, {Component} from "react";
import {Route, NavLink, BrowserRouter, Switch} from "react-router-dom";
import Homepage from "./components/homepage";
import Searchpage from "./components/searchpage";
import Detailspage from "./components/detailspage";

class Main extends Component {
  render() {
    return (<BrowserRouter>
      <div>
        <h1>Autopages</h1>
        <ul className="header">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search Results</NavLink>
          </li>
        </ul>
        <div className="content">
          <Switch>
            <Route exact path="/search" component={Searchpage}/>
            <Route exact path="/search/:page/:minPrice/:maxPrice" component={Searchpage}/>
            <Route exact path="/search/:page/:minPrice/" component={Searchpage}/>
            <Route exact path="/search/:page/" component={Searchpage}/>
            <Route exact path="/details/:vehicle/:query" component={Detailspage}/>
            <Route component={Homepage}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>);
  }
}

export default Main;
