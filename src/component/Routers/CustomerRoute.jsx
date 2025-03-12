import React from 'react'
import Home from '../Home/Home'
import RestaurantDetails from '../Restaurant/RestaurantDetails'
import Cart from '../Cart/Cart'
import Profile from '../Profile/Profile'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import Auth from '../Auth/Auth'
import Search from '../Search/Search'
import PaymentSuccess from '../PaymentSuccess/paymentsuccess'

const CustomerRoute = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:register' element={<Home/>}/>
            <Route path='/resturant/city/:title/:id' element={<RestaurantDetails/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/my-profile/*' element={<Profile/>}/>
            <Route path='/payment/success/:id*' element={<PaymentSuccess/>}/>
            
      </Routes>
      <Auth/>
    </div>
  )
}

export default CustomerRoute;