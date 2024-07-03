import React, { FormEvent, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { CreateDeliveryModalProps } from '../dto/CreateDeliveryModalProps.dto';

const CreateDeliveryModal: React.FC<CreateDeliveryModalProps> = ({ show, handleClose }) => {
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [packageDetails, setPackageDetails] = useState('');
  
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      // Handle form submission logic
    };

    const closeAndClearModal = () => {
        setPickupLocation('');
        setDropoffLocation('')
        setPackageDetails('');

        handleClose();
    }
  
    return (
      <Modal show={show} onHide={closeAndClearModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create or Import Deliveries</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="pickupLocation">
              <Form.Label>Pickup Location</Form.Label>
              <Form.Control
                type="text"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="dropoffLocation">
              <Form.Label>Dropoff Location</Form.Label>
              <Form.Control
                type="text"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="packageDetails">
              <Form.Label>Package Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={packageDetails}
                onChange={(e) => setPackageDetails(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create Delivery
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
}

export default CreateDeliveryModal;
