import React from 'react'
import './Navbar.css'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NavbarComp = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="/">Facebook</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='nav-right'>
      <Nav.Link as={Link} to='/profile' style={{color:'white'}}>Hi Vishnu</Nav.Link>
      <Nav.Link as={Link} to='/' style={{color:'white'}} eventKey={2}>
        Logout
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
