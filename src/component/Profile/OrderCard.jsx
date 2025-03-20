import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = ({item,order}) => {
  return (
    <Card className='flex justify-between items-center p-5 mt-5'>
      <div className='flex items-center space-x-5'>
      <img
      className="h-16 w-16" 
      src={item.food.images[0]} 
      alt="" 
      />
        <div>
        <p>{item.food.name}</p>
        <p>₹{item.totalprice}</p>
        </div>
      </div>
      <div>
        <button  className="cursor-not-allowed text-green-400">{order.orderStatus}</button>
      </div>
      
    </Card>
    
  )
}

export default OrderCard
