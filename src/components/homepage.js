import React, {Component} from "react";
import {Link} from "react-router-dom"

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: '0',
      maxPrice: '',
      page: '1'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getMinPrice() {
    if (!this.state.minPrice) {
      return 0;
    } else {
      return this.state.minPrice;
    }
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({[name]: target.value});
  }

  handleSubmit(event) {
    console.log('A search was submitted: ' + JSON.stringify(this.state));
  }

  render() {
    return (<div>
      <h2>Home</h2>

      <form onSubmit={this.handleSubmit}>
        <label>
          Min Price:
          <input type="number" name="minPrice" value={this.state.minPrice} onChange={this.handleChange}/>
        </label><br/>
        <label>
          Max Price:
          <input type="number" name="maxPrice" value={this.state.maxPrice} onChange={this.handleChange}/>
        </label><br/>
        <label>
          Page Number:
          <input type="number" name="page" value={this.state.page} onChange={this.handleChange}/>
        </label>
        <Link to={`/search/${this.state.page}/${this.state.minPrice
            ? this.state.minPrice
            : 0}/${this.state.maxPrice}`}>Search</Link>
      </form>
    </div>);
  }
}

export default Homepage
