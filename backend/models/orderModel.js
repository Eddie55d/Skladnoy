import mongoose from "mongoose";

const orderSchema = mongoose.Schema({

  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'User'
  // },

  orderItems: [
    {
      name: {type: String, required: true},
      qty: {type: Number, required: true},
      image: {type: String, required: true},
      price: {type: Number, required: true},
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
      }
    }
  ],

  shippingAddress: {
    userName: {type: String, required: true},
    userSurname: {type: String, required: true},
    userTelephone: {type: String, required: true},
    userEmail: {type: String, required: true},
    city: {type: String, required: true},
    street: {type: String, required: true},
    house: {type: Number, required: true},
    entrance: {type: Number, required: true},
    flat: {type: Number, required: true},
  },

  // paymentMethod: {
  //   type: String,
  //   required: true,
  // },

  // paymentResult: {
  //   id: {type: String},
  //   status: {type: String},
  //   update_time: {type: String},
  //   email_address: {type: String},
  // },

  // shippingPrice: {
  //   type: Number,
  //   required: true,
  //   default: 0.0
  // },

  // totalPrice: {
  //   type: Number,
  //   required: true,
  //   default: 0.0
  // },
  
  // isPaid: {
  //   type: Boolean,
  //   required: true,
  //   default: false
  // },

  // paidAt: {
  //   type: Date
  // },

  // isDelivered: {
  //   type: Boolean,
  //   required: true,
  //   default: false
  // },

  // deliveredAt: {
  //   type: Date
  // },

}, {
  timestamps: true
})

export default mongoose.model('Order', orderSchema)