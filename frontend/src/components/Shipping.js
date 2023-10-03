import React, { useState } from 'react'
import { Form, Button, FloatingLabel, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from './FormContainer'
import { saveShippingAddress } from '../actions/cartActions'
// import { useNavigate } from 'react-router-dom'

const Shipping = ({ history }) => {

  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart
  // const navigate = useNavigate()

  const [userName, setUserName] = useState(shippingAddress.userName)
  const [userSurname, setUserSurname] = useState(shippingAddress.userSurname)
  const [userTelephone, setUserTelephone] = useState(shippingAddress.userTelephone)
  const [userEmail, setUserEmail] = useState(shippingAddress.userEmail)
  const [city, setCity] = useState(shippingAddress.city)
  const [street, setStreet] = useState(shippingAddress.street)
  const [house, setHouse] = useState(shippingAddress.house)
  const [entrance, setEntrance] = useState(shippingAddress.entrance)
  const [flat, setFlat] = useState(shippingAddress.flat)


  const dispatch = useDispatch()

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(saveShippingAddress({ userName, userSurname, userTelephone, userEmail, city, street, house, entrance, flat }))
    // navigate(`/payment`)
  }

  return (
    <FormContainer>
      <h2 className='my-4'>Оформление заказа</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3 border border-primary border-2 rounded-3" controlId="userName">
          <FloatingLabel label="Имя">
            <Form.Control className="rounded-3"
              type="text"
              placeholder="введите имя"
              value={userName}
              required
              onChange={(e) => setUserName(e.target.value)} />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3 border border-primary border-2 rounded-3" controlId="userSurname">
          <FloatingLabel label="Фамилия">
            <Form.Control className="rounded-3"
              type="text"
              placeholder="введите фамилию"
              value={userSurname}
              required
              onChange={(e) => setUserSurname(e.target.value)} />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3 border border-primary border-2 rounded-3" controlId="userTelephone">
          <FloatingLabel label="Телефон">
            <Form.Control className="rounded-3"
              type="number"
              placeholder="введите телефон"
              value={userTelephone}
              required
              onChange={(e) => setUserTelephone(e.target.value)} />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3 border border-primary border-2 rounded-3" controlId="userEmail">
          <FloatingLabel label="Email">
            <Form.Control className="rounded-3"
              type="email"
              placeholder="введите почту"
              value={userEmail}
              required
              onChange={(e) => setUserEmail(e.target.value)} />
          </FloatingLabel>
          {/* <Form.Text className="text-muted">
            Мы никогда не будем делиться вашей электронной почтой с кем-либо еще.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3 border border-primary border-2 rounded-3" controlId="city">
          <FloatingLabel label="Город">
            <Form.Control className="rounded-3"
              type="text"
              placeholder="введите город"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)} />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3 border border-primary border-2 rounded-3" controlId="street">
          <FloatingLabel label="Улица">
            <Form.Control className="rounded-3"
              type="text"
              placeholder="введите улицу"
              value={street}
              required
              onChange={(e) => setStreet(e.target.value)} />
          </FloatingLabel>
        </Form.Group>


        <Row>
          <Col>

        <Form.Group className="mb-3 border border-primary border-2 rounded-3" controlId="house">
          <FloatingLabel label="Дом">
            <Form.Control className="rounded-3"
              type="number"
              placeholder="введите дом"
              value={house}
              required
              onChange={(e) => setHouse(e.target.value)} />
          </FloatingLabel>
        </Form.Group>
          </Col>
          <Col>

        <Form.Group className="mb-3 border border-primary border-2 rounded-3" controlId="entrance">
          <FloatingLabel label="Подъезд">
            <Form.Control className="rounded-3"
              type="number"
              placeholder="введите подъезд"
              value={entrance}
              required
              onChange={(e) => setEntrance(e.target.value)} />
          </FloatingLabel>
        </Form.Group>
          </Col>

          <Col>

        <Form.Group className="mb-3 border border-primary border-2 rounded-3" controlId="flat">
          <FloatingLabel label="Квартира">
          <Form.Control className="rounded-3"
            type="number"
            placeholder="введите номер квартиры"
            value={flat}
            required
            onChange={(e) => setFlat(e.target.value)} />
          </FloatingLabel>
        </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4 " controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Я даю свое согласие на обработку персональных данных" required />
        </Form.Group>


        <Button variant="outline-dark" type='submit' className='' >
          Сохранить адрес
        </Button>


      </Form>
    </FormContainer>
  )
}

export default Shipping
