import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded '>
      <Link className='border border-primary rounded' to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top p-2' />
      </Link>

      <Card.Body >
        <Card.Text as='h5'>
          <strong>{product.price} &#8381;</strong>
        </Card.Text>


        <Link to={`/product/${product._id}`} className='text-dark '>
          <Card.Title className='text-truncate' as='div'>{product.name}</Card.Title>
        </Link>

        {/* <Card.Text as='div'>
          <div className='my-3 '>
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text> */}

      </Card.Body>
    </Card>
  )
}

export default Product
