import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Button, Tabs, Tab, ListGroupItem, Form, ButtonGroup } from 'react-bootstrap'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


const ProductScreen = () => {

  let [qty, setQty] = useState(1)


  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {


    dispatch(listProductDetails(id))

  }, [dispatch, id])

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`)
  }

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>Назад</Link>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
        (<Row>
          <Col sm={12} md={6}>
            <Image src={product.image} alt={product.name} fluid />

            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="home" title="характеристики">
                <p>Тут характеристики</p>
              </Tab>
              <Tab eventKey="profile" title="отзывы">
                <p>Тут отзывы</p>
              </Tab>
            </Tabs>

          </Col>


          <Col sm={12} md={6}>
            <ListGroup variant='flush'>
              <ListGroupItem className='text-black-50'>
                Артикул: {product.vendorCode}
              </ListGroupItem>
              <ListGroupItem>
                <h3>{product.name}</h3>
              </ListGroupItem>

              <ListGroupItem >
                <Row>
                  <Col>
                    <h6>
                      Статус:
                    </h6>
                  </Col>

                  <Col>
                    {product.countInStock > 0 ? 'В наличии' : 'Нет в наличии'}
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <h5>
                  &#8381; {product.price}
                </h5>
              </ListGroupItem>
            </ListGroup>


            <ListGroup horizontal >
              <Row className='col col-sm-12'>

                {product.productSize?.map((sizeProduct, i) => (
                  <Col key={sizeProduct} xs={6} md={4} xl={3} >
                    <ListGroupItem action variant='light' className=' me-3 mt-2 border text-center ' >
                      {sizeProduct}
                    </ListGroupItem>
                  </Col>
                ))}
              </Row>
            </ListGroup>


            <Row>
              <Col>
                <Button className='btn btn-lg btn-dark my-3 ' onClick={addToCartHandler} disabled={product.countInStock === 0}>В корзину</Button>
              </Col>

              <Col>
                {product.countInStock > 0 && (
                  <ButtonGroup className='my-3'>

                    <Button variant='outline border-0 shadow-none' disabled={product.countInStock === qty} onClick={() => setQty(qty + 1)}><i className="bi bi-plus-circle fs-3"></i></Button>
                    <Button variant='outline border-0 fs-3 shadow-none'>
                      {qty}
                    </Button>
                    <Button variant='outline border-0 shadow-none' disabled={qty <= 1} onClick={() => setQty(qty - 1)}><i className="bi bi-dash-circle fs-3"></i></Button>
                  </ButtonGroup>
                )}
              </Col>
            </Row>

            <Form>
              <Form.Check aria-label="option 1" label="сравнить" />
            </Form>

            <hr className="dropdown-divider mt-3 mb-4"></hr>

            <h6>Описание:</h6>

            <p>{product.description}</p>



          </Col>
        </Row>)}
    </>
  )
}

export default ProductScreen
