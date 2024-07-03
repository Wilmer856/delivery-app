import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import {User} from '../dto/User.dto'
import { Driver } from '../dto/Driver.dto';

export default function DriverList() {
  const [drivers, setDrivers] = useState<User[]>([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
          throw new Error('No user found in localStorage');
        }

        const parsedUser = JSON.parse(storedUser);
        const token = parsedUser.token;
        if (!token) {
          throw new Error('No token found');
        }

        const response = await fetch("http://localhost:3000/api/users/drivers", {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          if (response.status === 401) {
            // Handle unauthorized access
            console.error('Unauthorized access - Please log in again.');
            return;
          }
          throw new Error('Failed to fetch drivers');
        }

        const data = await response.json();
        setDrivers(data);
      } catch (error) {
        console.error('Error fetching drivers:', error);
      }
    };

    fetchDrivers();
  }, []);

  return (
    <Table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver._id}>
              <td>{driver.name}</td>
              <td>{driver.email}</td>
              <td>{driver?.profile.phone}</td>
              <td>{driver?.profile.status}</td>
            </tr>
          ))}
        </tbody>
    </Table>
  )
}
