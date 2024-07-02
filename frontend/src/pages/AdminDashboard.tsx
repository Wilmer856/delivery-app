
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useAuthContext } from '../hooks/useAuthContext'
import DeliveryList from '../components/DeliveryList';
import DriverList from '../components/DriverList';
import Statistics from '../components/Statistics';


const AdminDashboard = () => {

  const { user } = useAuthContext();

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h2>Deliveries Overview</h2>
          <DeliveryList />
        </Col>
        <Col md={4}>
          <h2>Active Drivers</h2>
          <DriverList />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Statistics</h2>
          <Statistics />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
