import React, { Component } from "react";

class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 1,
      displayedVehicles: []
    }
  }

  componentDidMount() {
    fetch('https://autolist-test.herokuapp.com/search?page=1')
    .then(results => {
      return results.json();
    }).then(data => {
      let vehicles = data.records.map((vehicle) => {
        return(
          <div key={vehicle.id}>
            <img src={vehicle.primary_photo_url} />

          </div>
        )
      })
      this.setState({pageNumber: 1, displayedVehicles: vehicles})
      console.log("vehicles:", this.state.displayedVehicles);
    })
  }

  render() {
    return (
      <div className="container 2">
        <div className="container 1">
          {this.state.displayedVehicles}
        </div>
      </div>
    );
  }
}

export default SearchResults
