import React from 'react'
import bravoDoors from '../assets/dveriBravo'
import { Col,Row } from 'react-bootstrap';
import Product from '../components/Product'


const ProductDescription = () => {

 
  

  return (
    <Row className='bg-secondary'>
        {bravoDoors.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={2}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
  )
}

export default ProductDescription
