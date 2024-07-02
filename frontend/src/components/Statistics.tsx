import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

export default function Statistics() {
  
 const stats = {
        totalDeliveries: 120,
        completedDeliveries: 110,
        pendingDeliveries: 10,
        totalDrivers: 15,
        activeDrivers: 10,
      };
  
  return (
    <Row>
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title>Total Deliveries</Card.Title>
                    <Card.Text>{stats.totalDeliveries}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title>Completed Deliveries</Card.Title>
                    <Card.Text>{stats.completedDeliveries}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title>Pending Deliveries</Card.Title>
                    <Card.Text>{stats.pendingDeliveries}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title>Total Drivers</Card.Title>
                    <Card.Text>{stats.totalDrivers}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title>Active Drivers</Card.Title>
                    <Card.Text>{stats.activeDrivers}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
  )
}
