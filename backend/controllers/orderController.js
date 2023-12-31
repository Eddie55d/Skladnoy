import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js'


// создать новый заказ
// route POST/api/orders
// access - Public

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
  
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
    return
  } else {
    const order = new Order({
      orderItems,
      shippingAddress,
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
})

export {addOrderItems}