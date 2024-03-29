import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/esm/Badge'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'

import { useContext } from 'react'
import {AuthContext} from '../../context/authContext'

const NavbarMenu = () => {

    const { authState: { user }, logoutUser } = useContext(AuthContext)
    console.log(user)
    const logoutuser=() => {
        logoutUser()
    }
	return (
		<Navbar bg="primary" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="success"
        onClick={logoutuser}
        >logout</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
	)
}

export default NavbarMenu