import React, { Component } from "react";

import './searchresults.css';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedVehicles: [],
      pageData: {}
    }
  }

  componentDidMount() {

    let request = 'https://autolist-test.herokuapp.com/search?page=';
    let query = ''
    if (this.props.pageNumber > 0) {
      query += this.props.pageNumber;
    } else {
      alert("invalid page number, resetting to page 1"); // should redirect
      query += '1';
    }

    if (this.props.minQuery) {
      query += '&price_min=' + this.props.minQuery;
    }

    if (this.props.maxQuery) {
      query += '&price_max=' + this.props.maxQuery;
    }

    request += query;

    fetch(request)
    .then(results => {
      return results.json();
    }).then(data => {
      let vehicleData = {
        count: data.total_count,
        count_formatted: data.total_count_formatted,
        page_count: data.hits_count
      };

      let vehicles = data.records.map((vehicle) => {
        let backgroundStyle = {
          backgroundImage: 'url(' + vehicle.primary_photo_url + '), url(/not_found.jpg)'
        };
        let vehicleLink = "/details/" + vehicle.id + "/" + query;
        return(
          <div key={vehicle.id} className="vehicle-item-view">
          <a href={vehicleLink} className="AL-vehicle-item -small-md -stacked-sm -stacked-xs -popout-action ">
            <div className="photo">
              <div className="AL-vehicle-photo">
                <div className="viewed-overlay hidden"></div>
                <div className="overlay-menu" data-menu="">
                  <div className="item -favorite -results-gtsm " data-action="favorite"></div>
                </div>
                <div className="photo" style={backgroundStyle}></div>
              </div>
            </div>

            <div className="details">
              <h3 className="AL-vehicle-primary-details -small-sm -small-xs">
                <div className="description">
                  <div className="headline">{vehicle.year} {vehicle.make} {vehicle.model}</div>
                  <div className="subtext">
                      {vehicle.mileage_humanized}
                  </div>
                </div>
                <div className="pricing">
                  <div className="headline">{vehicle.price_mobile}</div>
                </div>
              </h3>

              <div className="AL-vehicle-secondary-details -small-sm -small-xs" data-menu="">
                <div className="location">Location: ({vehicle.lat},{vehicle.lon})</div>
              </div>
            </div>
          </a>
          </div>
        )
      })

      this.setState({displayedVehicles: vehicles, pageData: vehicleData})
    })
  }

  render() {
    return (
      <div className="search-column">
        <div className="search-header">Results: {this.state.pageData.count_formatted} Page: {this.props.pageNumber}</div>
        <div id="vehicle-list" className="vehicle-list" style={{display: "block"}}>
            {this.state.displayedVehicles}
        </div>
      </div>
    );
  }
}

SearchResults.defaultProps = {
  pageNumber: 1,
  query: '',
}

export default SearchResults
