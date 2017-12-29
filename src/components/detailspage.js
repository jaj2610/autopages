import React, {Component} from "react";

import './searchresults.css';

class Detailspage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicle: {}
    }
  }

  componentDidMount() {
    let vehicleId = this.props.match.params.vehicle
      ? this.props.match.params.vehicle
      : '';
    let query = this.props.match.params.query
      ? this.props.match.params.query
      : '1';

    let request = 'https://autolist-test.herokuapp.com/search?page=';
    request += query;

    // this would ideally be stored, accessible by id/vin
    fetch(request).then(results => {
      return results.json();
    }).then(data => {
      let currentVehicle = data.records.find(item => item.id === Number(vehicleId))
      console.log("data", currentVehicle);

      this.setState({vehicle: currentVehicle});
    });
  }

  render() {
    let backgroundStyle = {
      backgroundImage: 'url(' + this.state.vehicle.primary_photo_url + '), url(/not_found.jpg)'
    };

    return (<div>
      <h2>Details Page</h2>

      <div key={this.state.vehicle.id} className="vehicle-item-detail">
        <div className="AL-vehicle-item -small-md -stacked-sm -stacked-xs -popout-action ">
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
                <div className="headline">{this.state.vehicle.year}&nbsp;
                  {this.state.vehicle.make}&nbsp;
                  {this.state.vehicle.model}</div>
                <div className="subtext">
                  {this.state.vehicle.mileage_humanized}
                </div>
              </div>
              <div className="pricing">
                <div className="headline">{this.state.vehicle.price_mobile}</div>
              </div>
            </h3>

            <div className="AL-vehicle-secondary-details -small-sm -small-xs" data-menu="">
              <div className="location">Location: ({this.state.vehicle.lat},{this.state.vehicle.lon})</div>
            </div>
          </div>
        </div>
      </div>

      {JSON.stringify(this.state.vehicle)}
    </div>);
  }
}

export default Detailspage
