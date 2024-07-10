import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RouteMap from '../components/RouteMap';
import DropOffLocations from '../components/DropOffLocations';
import RouteList from '../components/RouteList'
// import AssignedDeliveries from './AssignedDeliveries';
// import Notifications from './Notifications';

interface DropOffLocation {
  id: string;
  name: string;
  coordinates: [number, number];
}

interface Route {
  id: string;
  name: string;
}

const DriverDashboard = () => {

  const [start, setStart] = useState<[number, number]>([51.505, -0.09]);
  const [end, setEnd] = useState<[number, number]>([51.51, -0.1]);
  const routes: Route[] = [
    { id: '1', name: 'Route 1' },
    { id: '2', name: 'Route 2' }
  ];

  const locations: DropOffLocation[] = [
    { id: '1', name: 'Location 1', coordinates: [51.505, -0.09] },
    { id: '2', name: 'Location 2', coordinates: [51.51, -0.1] }
  ];

  const handleSelectRoute = (routeId: string) => {
    // Fetch route and drop-off locations for the selected route
    // For demonstration purposes, we'll use static data
    if (routeId === '1') {
      setStart([51.505, -0.09]);
      setEnd([51.51, -0.1]);
    } else if (routeId === '2') {
      setStart([51.515, -0.11]);
      setEnd([51.52, -0.12]);
    }
  };

  const handleClickLocation = (coordinates: [number, number]) => {
    // Highlight the selected location on the map
    setEnd(coordinates);
  };


  return (
    <Container fluid>
      <Row>
        <Col lg={8}>
          {/* <h2>My Deliveries</h2> */}
          <RouteMap start={start} end={end}/>
        </Col>
        <Col lg={4}>
          <DropOffLocations locations={locations} onClickLocation={handleClickLocation}/>
        </Col>
      </Row>
      <Row>
        <Col>
        <RouteList routes={routes} onSelectRoute={handleSelectRoute}/>
        </Col>
      </Row>
    </Container>
  );
};

export default DriverDashboard;