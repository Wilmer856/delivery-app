import { Navbar, Nav, Button } from 'react-bootstrap';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const NavBar = () => {

  const { user } = useAuthContext();
  const { logout } = useLogout()

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
        <Button variant="outline-danger" onClick={logout}>Logout</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;