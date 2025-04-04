import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersOrder } from '../State/Order/Action';



const Orders = () => {
  const {auth,order}=useSelector((store)=>store);
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const jwt=localStorage.getItem("jwt")

  useEffect(()=>{
    dispatch(getUsersOrder(jwt))
  },[auth.jwt])

  useEffect(()=>{
    if(!auth.jwt){
      navigate("/login")
    }
  }
  ,[])
  if(!auth.jwt){
    return null
  }
  if(order.loading){
    return <div className='flex items-center justify-center h-screen'>
      <img src="/images/loading.gif" alt="loading" />
    </div>
  }
  if(order.error){
    return <div className='flex items-center justify-center h-screen'>
      <img src="/images/error.gif" alt="error" />
    </div>
  }
  return (
    <div className='flex items-center justify-center flex-col'>
      <h1 className='text-xl text-center py-7 font-semibond'>My Orders</h1>
      <div className='space-y-5 w-full lg:w-1/2'>
     {order.orders?.map((order)=> order.items.map((item)=><OrderCard order={order} item={item}/>))}
      </div>
    </div>
  )
}

export default Orders
