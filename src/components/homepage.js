import React, { Component } from "react";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: '',
      maxPrice: '',
      page: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
    console.log('A search was submitted: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Home</h2>

        <form onSubmit={this.handleSubmit}>
          <label>
            Min Price:
            <input type="number" name="minPrice" value={this.state.minPrice} onChange={this.handleChange} />
          </label><br/>
          <label>
            Max Price:
            <input type="number" name="maxPrice" value={this.state.maxPrice} onChange={this.handleChange} />
          </label><br/>
          <label>
            Page Number:
            <input type="number" name="page" value={this.state.page} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default Homepage
