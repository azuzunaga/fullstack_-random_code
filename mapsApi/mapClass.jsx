import React from 'react';
import ReactDOM from 'react-dom';

const wallingford = {lat: 41.441, lng: -72.777};

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.waypoints = [];
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
  }

  componentDidMount() {
    const map = ReactDOM.findDOMNode(this.refs.map);

    const options = {
      center: this.props.center,
      zoom: 14
    };

    this.map = new google.maps.Map(map, options);
  }

  ClickEventHandler(map) {
    this.directionsDisplay.setMap(map);

    this.map.addListener('click', this.handleClick);
  }

  handleClick(event) {
    console.log('You clicked on: ', event.latLng);
  }

  render() {
    return (
     <div>
       <div id='map' ref='map' />
     </div>
   );
  }
}

ReactDOM.render(
  <Map center={wallingford} />,
  document.getElementById('root')
);
