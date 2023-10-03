import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import Footer from './components/Footer'
import UserScreen from './screens/UserScreen'
import CartScreen from './screens/CartScreen'
import HeartScreen from './screens/HeartScreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>} exact />
            <Route path='/product/:id' element={<ProductScreen/>} />
          
            <Route path='/user' element={<UserScreen/>} />
            <Route path='/cart/' element={<CartScreen/>} />
            <Route path='/cart/:id' element={<CartScreen/>} />
            <Route path='/heart' element={<HeartScreen/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App