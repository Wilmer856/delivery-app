import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

export default function DeliveryList() {
  const [deliveries, setDelivereies] = useState([]);

  useEffect(() => {
    fetch('/api/deliveries')
    .then((res) => res.json())
    .then((data) => setDelivereies(data))

  }, [])


  return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>ID</th>
                <th>Pickup Location</th>
                <th>Dropoff Location</th>
                <th>Status</th>
                <th>Assigned Driver</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </Table>
  )
}
