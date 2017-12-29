import React, {Component} from "react";

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

    return (<div>
      <h2>Details Page</h2>
      {JSON.stringify(this.state.vehicle)}
    </div>);
  }
}

export default Detailspage
