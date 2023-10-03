import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import aboutCom from '../assets/aboutComp.png'

const AboutCompany = () => {
  return (
    <Container fluid className='mt-3'>
    <Row>
      <Col xs={12} md={7}>

      <h2>
        Межкомнатные и входные двери в интернет-магазине Складной
      </h2>
      <p>
        Интернет-магазин «Складной» предлагает недорого купить межкомнатные и входные двери с установкой в Москве и Московской области, на сайте представлена продукция зарубежных и отечественных производителей.

        Осуществляем доставку по Москве и Московской области собственным курьерским транспортом на следующий день после оформления заказа. Замер и установку выполняют наши специалисты. Предоставляем гарантию на установку сроком на один год!

        Оформите заказ на сайте или свяжитесь по почте!
      </p>
      </Col>
      <Col md={5} className='d-none d-md-block'>
        <Image fluid rounded src={aboutCom}/>
      </Col>
    </Row>
    </Container>
  )
}

export default AboutCompany
