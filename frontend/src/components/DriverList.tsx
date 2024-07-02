import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import {User} from '../dto/User.dto'
import { Driver } from '../dto/Driver.dto';

export default function DriverList() {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    fetch('/api/users/')
    .then((res) => res.json())
    .then((data) => setDrivers(data))
  }, [])

  return (
    <Table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
        {drivers.map((driver) => (
          <tr key={driver.id}>
            <td>{driver.id}</td>
            <td>{driver.name}</td>
            <td>{driver.email}</td>
            <td>{driver?.phone}</td>
            <td>{driver?.status}</td>
          </tr>
        ))}
        </tbody>
    </Table>
  )
}
