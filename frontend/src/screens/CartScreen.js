import React, { useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import { Row, Col, ListGroup, Image, ButtonGroup, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Shipping from '../components/Shipping'
import { createOrder } from '../actions/orderActions'


const CartScreen = () => {

  const { id } = useParams(); 
  const { search } = useLocation();

  


  const qty = search ? Number(search.split('=')[1]) : 1;

  
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart


  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty))
    }
  }, [dispatch, id, qty])


  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const orderCreate = useSelector(state => state.cart)
  const {order, success, error} = orderCreate

  const navigate = useNavigate()

  useEffect(() => {
    if(success) {
      
      navigate(`/order/${order._id}`)
    } 

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, success])

  const checkoutHandler = () => {
    
    dispatch(createOrder({
      orderItems: cart.cartItems,
      shippingAddress: cart.shippingAddress
    }))
  }

  return (
    <Row>
      <Col md={8}>
        <h2>Корзина</h2>
        {cartItems.length === 0 ? (
          <Message>
            Ваша корзина пуста! <Link to='/'>На главную</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map(item => (
              <ListGroup.Item  key={item.product}>
                <Row className='align-items-center'>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={4}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2} className='text-nowrap'>{item.price} &#8381;</Col>
                  <Col md={3}>
                    <ButtonGroup className='my-3'>

                      <Button variant='outline border-0 shadow-none' disabled={item.countInStock === item.qty} onClick={() => dispatch (addToCart(item.product, item.qty + 1))}><i className="bi bi-plus-circle fs-4"></i></Button>
                      <Button variant='outline border-0 fs-4 shadow-none p-0'>
                        {item.qty}
                      </Button>
                      <Button variant='outline border-0 shadow-none' disabled={item.qty <= 1} onClick={() => dispatch (addToCart(item.product, item.qty - 1))}><i className="bi bi-dash-circle fs-4"></i></Button>
                    </ButtonGroup>
                  </Col>
                  <Col md={1}>
                    <Button type='button' variant='light fs-5 bg-white border-0' onClick={() => 
                    removeFromCartHandler(item.product)}>
                      <i className="bi bi-trash"></i>
                    </Button> 
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
            <Shipping ></Shipping>
            <ListGroup.Item>
              {error && <Message variant='danger'/>}
            </ListGroup.Item>
          </ListGroup>)}
      </Col>
      

      <Col md={4}>
        <Card className='sticky-top'>
          <ListGroup.Item className='bg-light'>
            <h4>
              Всего товаров: {cartItems.reduce((acc, item) => acc + item.qty, 0)}
            </h4>
            <h4>
              Итого: {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)} &#8381;
            </h4>
          </ListGroup.Item>
          <ListGroup.Item className='bg-light'>
            <Button type='button'  variant="dark" className='shadow-none' disabled={cartItems.length === 0} 
            onClick={checkoutHandler}>
              Оформить заказ
            </Button>
          </ListGroup.Item>
        </Card>                
      </Col>
     
    </Row>
  )
}

//value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}

export default CartScreen