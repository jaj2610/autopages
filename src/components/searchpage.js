import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom"
import SearchResults from './searchresults'

class Searchpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      minPrice: '',
      maxPrice: ''
    }
  }

  componentWillMount() {
    const pageNumber = this.props.match.params.page ? this.props.match.params.page : this.state.page;
    const min = this.props.match.params.minPrice ? this.props.match.params.minPrice : '';
    const max = this.props.match.params.maxPrice ? this.props.match.params.maxPrice : '';

    console.log(min, max);
    this.setState({
      page: pageNumber,
      minPrice: min,
      maxPrice: max
    });
  }

  render() {
    return (

      <div>
        <h2>Search Page</h2>
          <SearchResults pageNumber={this.state.page} minQuery={this.state.minPrice} maxQuery={this.state.maxPrice}/>
      </div>
    );
  }
}

export default Searchpage
