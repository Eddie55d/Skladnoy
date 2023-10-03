import mongoose from 'mongoose'


// mongoose.Promise = global.Promise;
const connectDB = async () => {
  try {
    const dbConnect = await mongoose.connect(process.env.MONGODB_URI, { 
      useNewUrlParser: true, 
      
      useUnifiedTopology: true })
    
      console.log(`Mongo connected: ${dbConnect.connection.host}`)

  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB