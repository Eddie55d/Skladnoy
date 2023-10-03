import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'



const topBrandProduct = () => {
  return (
    <Container className='mt-3' style=
      {{
        background: "linear-gradient(102.39deg, #C7F879 0%, rgba(208, 243, 206, 0.5) 49.83%, rgba(16, 74, 87, 0.5) 100%)",
        borderRadius: "29px"
      }}>

      <Row className='d-flex '>
        <Col sm={7}>
          <h3 className='text-end fw-bold me-5 mt-3'>Bravo</h3>
        </Col>
        <Col sm={5}>
          <Button variant='outline-dark float-end me-2 mt-3'>В каталог</Button>
        </Col>
      </Row>

    </Container>
  )
}

export default topBrandProduct
