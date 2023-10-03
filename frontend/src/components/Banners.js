import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Banner_1 from '../assets/banner-1.png'
import Banner_2 from '../assets/banner-2.png'

const Banners = () => {
  return (
    <Container fluid className='mt-3'>
      <Row className='d-flex'>
        <Col sm={12} md={6} className='mb-3 mb-md-none  position-relative'>
          <Image fluid src={Banner_1}/>
          <div className='position-absolute top-0 start-0 mt-3 mt-xl-4 ms-4 lh-sm '>           
            <p className='text-dark fw-bold mt-2 mt-md-3 mt-xl-5 ms-none ms-md-2 text-md-fs-1 ms-xl-5'><span className='text-danger fs-2'>до -10%</span> СКИДКА <br/> на двери фирмы Bravo</p>            
          </div>
        </Col>
        <Col sm={12} md={6} className='position-relative '>
          <Image fluid src={Banner_2} />
          <div className='position-absolute top-0 start-0 mt-3 mt-xl-4 ms-4 lh-sm'>
            <p className='text-dark fw-bold mt-2 mt-md-3 mt-xl-5 ms-none ms-md-2 text-md-fs-1 ms-xl-5'><span className='text-primary fs-2'>0%</span> РАССРОЧКА <br/> на три месяца</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Banners
