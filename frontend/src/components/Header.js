import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, FormControl, Col, InputGroup, Button } from 'react-bootstrap'
import LogoGrey from '../assets/icons/LogoGrey.png'
import Search from '../assets/icons/Search.png'
import MenuButton from './MenuButton'
import MenuMobile from './MenuMobile'

const Header = () => {
  return (
    <header className='mb-3'>
      <Navbar bg="dark" variant="dark" className='flex-column'>
        {/* <Container className='container-xxl '>
          <Nav className='me-auto'>
            <Nav.Link href="#action1"><i class="bi bi-geo-alt"></i>Elektrostal</Nav.Link>
          </Nav>
          <Button variant="outline-success me-1">связаться с нами</Button>
          <Button variant="outline-success">стать партнёром</Button>
        </Container> */}
        <Container className='container-xxl'>
          <Col xs="auto" className='me-2'>
            {/* <Button type='button' variant='outline-primary border-2'> */}
            {/* <i as='Button' type='button' className="bi bi-list text-white" ></i> */}
            <MenuButton/>
            {/* </Button> */}
          </Col>
          <Col lg="auto" className='d-none d-sm-block'>
            <LinkContainer to='/'>
              <Navbar.Brand ><img src={LogoGrey} height="36" alt="Skladnoy" /></Navbar.Brand>
            </LinkContainer>
          </Col>
          <Col lg={4} xl={5}>
            {/* <Form className=" "> */}
              <InputGroup className='d-flex mx-auto mx-xxl-3 input-group-text border border-primary border-3 rounded-pill p-0 bg-white'>
                  <FormControl className='border-0 rounded-pill fs-5 shadow-none'
                    type="search"
                    placeholder="поиск..."

                    aria-describedby="basic-addon1"
                    aria-label="Search">
                  </FormControl>
                <Button variant="outline-white shadow-none fs-6"   id="basic-addon1"><img src={Search} alt="search"/></Button>
              </InputGroup>
              {/* <Button variant="outline-success">Search</Button> */}

              
            {/* </Form> */}
          </Col>
          <Col lg={5} xxl={4} className='d-none d-md-block'>
            <Nav className='text-nowrap float-xxl-end ms-xxl-5'>

              <LinkContainer to="/user">
                <Nav.Link className='pe-0 fs-5 d-block d-lg-none' ><i className="bi bi-person-circle"></i></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/user">
                <Nav.Link className='d-none d-lg-block ms-0 fs-5'><i className="bi bi-person-circle"></i>  Профиль</Nav.Link>
              </LinkContainer>



              <LinkContainer to="/cart">
                <Nav.Link className='pe-0 d-block d-lg-none fs-5' ><i className="bi bi-cart3"></i></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link className='d-none d-lg-block ms-0 fs-5'><i className="bi bi-cart3"></i>  Корзина</Nav.Link>
              </LinkContainer>



              <LinkContainer to="/heart">
                <Nav.Link className='pe-0 d-block d-lg-none fs-5'><i className="bi bi-heart"></i> </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/heart">
                <Nav.Link className='d-none d-lg-block ms-0 fs-5'><i className="bi bi-heart"></i>   Избранное</Nav.Link>
              </LinkContainer>

            </Nav>
          </Col>
        </Container>
      </Navbar>
      <MenuMobile/>
    </header>
  )
}

export default Header
