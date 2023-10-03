
import React, { useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
import TopBrandProduct from '../components/TopBrandProduct'
import Partners from '../components/Partners'
import Banners from '../components/Banners'
import AboutCompany from '../components/AboutCompany'



const HomeScreen = () => {

  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const { loading, products, error } = productList

  useEffect(() => {
    dispatch(listProducts())

  }, [dispatch])


  return (
    <>
      <h3>Популярные товары</h3>
      {loading ? <Loader/> : error ? <Message>{error}</Message> : <Row className='bg-secondary'>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={2}>
            <Product product={product} />
          </Col>
        ))}
      </Row>}

      <TopBrandProduct/>
      <Partners/>
      <Banners/>
      <AboutCompany/>
    </>
  )
}

export default HomeScreen
