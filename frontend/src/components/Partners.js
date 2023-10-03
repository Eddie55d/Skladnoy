import React from 'react'
import { Carousel, Image, Col, CarouselItem, Row, Container } from 'react-bootstrap'
import Brand_1 from '../assets/brand/image_1.png'
import Brand_2 from '../assets/brand/image_2.png'
import Brand_3 from '../assets/brand/image_3.png'
import Brand_4 from '../assets/brand/image_4.png'
import Brand_5 from '../assets/brand/image_5.png'
import Brand_6 from '../assets/brand/image_6.png'
import Brand_7 from '../assets/brand/image_7.png'
import Brand_8 from '../assets/brand/image_8.png'

const Partners = () => {


  return (
    <Container fluid className='mt-3'>

      <h3 className='text-start'>Наши партёры</h3>
      <Carousel className='slide mt-1' style={{ height: '170px' }} >

        <CarouselItem className=' mt-3 '>
          <Row className='d-flex justify-content-around align-items-center'>
            <Col xs={12} sm={6} md={2}>
              <Image src={Brand_1} alt="..." className=' ' />
            </Col>

            <Col xs={12} sm={6} md={2}>

              <Image src={Brand_2} alt="..." className=' ' />

            </Col>
            <Col xs={12} sm={6} md={2}>

              <Image src={Brand_3} alt="..." className=' ' />

            </Col>
            <Col xs={12} sm={6} md={2}>

              <Image src={Brand_4} alt="..." className=' ' />
            </Col>
          </Row>
        </CarouselItem>

        <CarouselItem className=' mt-3 '>
          <Row className='d-flex justify-content-around align-items-center'>
            <Col xs={12} sm={6} md={2}>
              <Image src={Brand_5} alt="..." className=' ' />
            </Col>

            <Col xs={12} sm={6} md={2}>

              <Image src={Brand_6} alt="..." className=' ' />

            </Col>
            <Col xs={12} sm={6} md={2}>

              <Image src={Brand_7} alt="..." className=' ' />

            </Col>
            <Col xs={12} sm={6} md={2}>


              <Image src={Brand_8} alt="..." className=' ' />
            </Col>
          </Row>
        </CarouselItem>
      </Carousel>
    </Container>
  )
}

export default Partners




