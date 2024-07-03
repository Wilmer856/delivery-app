
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useAuthContext } from '../hooks/useAuthContext'
import DeliveryList from '../components/DeliveryList';
import DriverList from '../components/DriverList';
import Statistics from '../components/Statistics';
import CreateDeliveryModal from '../components/CreateDeliveryModal';


const AdminDashboard = () => {

  const { user } = useAuthContext();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Container>
        <Row className="my-4">
          <Col>
            <Button variant="primary" onClick={handleShowModal}>
              Create or Import Deliveries
            </Button>
          </Col>
        </Row>
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
      <CreateDeliveryModal show={showModal} handleClose={handleCloseModal} />
    </>
  );
};

export default AdminDashboard;
