import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    this.handlePage();
  }

  currentQuery() {
    let currentQuery = '';
    if (this.state.minPrice) {
      currentQuery += '/' + this.state.minPrice;
    } else {
      currentQuery += '/0';
    }
    if (this.state.maxPrice) {
      currentQuery += '/' + this.state.maxPrice;
    }

    return currentQuery;
  }

  handlePage() {
    // recalculate page query
    const pageNumber = this.props.match.params.page ? this.props.match.params.page : this.state.page;
    const min = this.props.match.params.minPrice ? this.props.match.params.minPrice : '';
    const max = this.props.match.params.maxPrice ? this.props.match.params.maxPrice : '';

    if (pageNumber > 0) {
      this.setState({
        page: pageNumber,
        minPrice: min,
        maxPrice: max
      });
    } else {
      this.setState({
        page: 1,
        minPrice: min,
        maxPrice: max
      })
    }
  }

  render() {
    let prevLink = "/search/" + (Number(this.state.page) - 1) + this.currentQuery();
    let nextLink = "/search/" + (Number(this.state.page) + 1) + this.currentQuery();

    return (
      <div>
        <h2>Search Page</h2>
          <SearchResults pageNumber={this.state.page} minQuery={this.state.minPrice} maxQuery={this.state.maxPrice}/>
          <Link to={prevLink} style={(this.state.page <= 1) ? {pointerEvents: "none"} : null} onClick={this.handlePage}>Previous</Link>
          <Link to={nextLink} onClick={this.handlePage}>Next</Link>
      </div>
    );
  }
}

export default Searchpage
