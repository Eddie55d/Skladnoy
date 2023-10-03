import React from 'react'
import logoMir from '../assets/Mir.svg'
import logoVisa from '../assets/visaLogo.svg'
import logoMaster from '../assets/masterLogo.svg'
import { Row, Col, Form, FormControl, Button, Container } from 'react-bootstrap'

const Footer = () => {
  return (

    <footer className="container-fluid bg-light mb-5 mb-md-0">
      <Container className='container-xxl text-dark mt-3'>
        <Row className='mb-6'>
          <Col xs={12} sm={6} md={3} lg={3}>
            <h6 className="mt-4 mb-4">Контакты</h6>
            <p>+7 (925) 802 8707</p>
            <p>144000, г. Электросталь, Мира 24Б</p>
            <p>Мы принимаем:</p>
            <div className='d-flex' >
              <div className="d-flex justify-content-center align-items-center bg-dark me-2 rounded-2 " style={{ width: '36px', height: '24px' }} >
                <img src={logoMir} className="img-fluid" alt="..." />
              </div>
              <div className="d-flex justify-content-center align-items-center bg-dark me-2 rounded-2 " style={{ width: '36px', height: '24px' }} >
                <img src={logoVisa} className="img-fluid" alt="..." />
              </div>
              <div className="d-flex justify-content-center align-items-center bg-dark rounded-2 " style={{ width: '36px', height: '24px' }}>
                <img src={logoMaster} className="img-fluid" alt="..." />
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} >
            <h6 className="mt-4 mb-4">Покупателям</h6>
            <ul className="list-unstyled">
              <li className='mb-1'><a href="/" className="link text-decoration-none text-dark">Правила продажи</a></li>
              <li className='mb-1'><a href="/" className="link text-decoration-none text-dark">Доставка</a></li>
              <li className='mb-1'><a href="/" className="link text-decoration-none text-dark">Публичная оферта</a></li>
              <li className='mb-1'><a href="/" className="link text-decoration-none text-dark">Возврат</a></li>

            </ul>
          </Col>
          <Col xs={12} sm={6} md={3} >
            <h6 className="mt-4 mb-4">Компания</h6>
            <ul className="list-unstyled">
              <li className='mb-1'><a href="/" className="link text-decoration-none text-dark">О нас</a></li>
              <li className='mb-1'><a href="/" className="link text-decoration-none text-dark">Производители</a></li>
              <li className='mb-1'><a href="/" className="link text-decoration-none text-dark">Сертификаты</a></li>
              <li className='mb-1'><a href="/" className="link text-decoration-none text-dark">Контакты</a></li>
              <li className='mb-1'><a href="/" className="link text-decoration-none text-dark">Реквизиты</a></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h6 className="mt-4 mb-4 text-nowrap">Оставайтесь на связи</h6>
            <Form className="d-flex gap-2 flex-column  flex-xl-row">
              <FormControl
                type="search"
                placeholder="E-mail"
                aria-label="Search"
              />
              <Button variant="dark">Подписаться</Button>
            </Form>
            <p>Будьте в курсе наших последних новостей и специальных предложений.</p>
          </Col>
        </Row>
        <hr className="dropdown-divider mt-5 mb-4"></hr>
        <Row >
          <Col xs={12} sm={6} ps={2}>
            <p className="text-center text-sm-start">© 2022 Skladnoy</p>
          </Col>
          <Col xs={12} sm={6} pe={2}>
            <p className="text-center text-sm-end">Jellysoft</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
