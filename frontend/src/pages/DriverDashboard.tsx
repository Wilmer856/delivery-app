import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RouteMap from '../components/RouteMap';
// import AssignedDeliveries from './AssignedDeliveries';
// import Notifications from './Notifications';

const DriverDashboard = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <h2>My Deliveries</h2>
          {/* <AssignedDeliveries /> */}
        </Col>
        <Col md={4}>
          <h2>Route Map</h2>
          <RouteMap />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Notifications</h2>
          {/* <Notifications /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default DriverDashboard;