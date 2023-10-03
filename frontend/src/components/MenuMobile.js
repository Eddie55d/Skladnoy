import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const menuMobile = () => {
  return (

    <Navbar fixed="bottom" variant="light" bg="light" className='d-md-none'>
      <Nav className='d-flex flex-row mx-auto'>
        <LinkContainer to="/">
          <Nav.Link className='fs-5 mx-4' ><i className="bi bi-house-door"></i></Nav.Link>
        </LinkContainer>

        <LinkContainer to="/cart">
          <Nav.Link className='fs-5 mx-4' ><i className="bi bi-cart3"></i></Nav.Link>
        </LinkContainer>

        <LinkContainer to="/heart">
          <Nav.Link className='fs-5 mx-4'><i className="bi bi-heart"></i> </Nav.Link>
        </LinkContainer>

        <LinkContainer to="/user">
          <Nav.Link className='fs-5 mx-4' ><i className="bi bi-person-circle"></i></Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>

  )
}

export default menuMobile
