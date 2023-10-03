import React, { useState } from 'react'
import { Offcanvas, Accordion, Nav, Image } from 'react-bootstrap';
import metDveriMenu from '../assets/icons/metDveriMenu.png'
import roomDveriMenu from '../assets/icons/roomDveriMenu.png'
import kraskiMenu from '../assets/icons/kraskiMenu.png'


const NavbarMobile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <i as='Button' type='button' className="bi bi-list text-white" onClick={handleShow}></i>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Каталог</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Accordion flush defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h6>
                  Металлические двери
                </h6>
                <Image src={metDveriMenu} alt='...' fluid rounded />
                
              </Accordion.Header>
              <Accordion.Body>
                
                  <Nav.Item>
                    <Nav.Link href="/">Torex</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">Бульдорс</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2">Браво</Nav.Link>
                  </Nav.Item>
              
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h6>
                  Межкомнатные двери
                </h6>
                <Image src={roomDveriMenu} alt='...' fluid rounded />
              </Accordion.Header>
              <Accordion.Body>
                
                  <Nav.Item>
                    <Nav.Link href="/">Геона</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">ProfileDoors</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2">Браво</Nav.Link>
                  </Nav.Item>
               
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h6>
                  Краски
                </h6>
                <Image src={kraskiMenu} alt='...' fluid rounded />
              </Accordion.Header>
              <Accordion.Body>
                <Nav.Item>
                  <Nav.Link href="/">Хуяски</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Отмазки</Nav.Link>
                </Nav.Item>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default NavbarMobile
