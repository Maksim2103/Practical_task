import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const HeaderNavBar = () => {
  return (
    <Navbar className="mb-5" bg="dark" variant="dark">
      <Navbar.Brand>React Example</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#users">Users</Nav.Link>
        <Nav.Link href="#photos">Photos</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default HeaderNavBar;
