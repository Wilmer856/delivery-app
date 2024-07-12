import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const NavBar = () => {

  const { user } = useAuthContext();
  const { logout } = useLogout()

  const notifications = [
    'Notification 1',
    'Notification 2',
    'Notification 3'
  ];

  return (
    <Navbar bg="light" expand="lg" className="p-4">
      <Navbar.Brand href="/">Delivery CRM</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {user?.role === 'admin' ? (
            <>
              <Nav.Link href="/admin-dashboard">Admin Dashboard</Nav.Link>
              <Nav.Link href="/deliveries">Deliveries</Nav.Link>
              <Nav.Link href="/drivers">Drivers</Nav.Link>
            </>
          ) : (
            <Nav.Link href="/driver-dashboard">Driver Dashboard</Nav.Link>
          )}
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
        <NavDropdown className="mx-4" title={<span><i className="fas fa-bell"></i></span>} id="notifications-dropdown">
          {notifications.map((notification, index) => (
            <NavDropdown.Item key={index}>{notification}</NavDropdown.Item>
          ))}
        </NavDropdown>
        <Button variant="outline-danger" onClick={logout}>Logout</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
