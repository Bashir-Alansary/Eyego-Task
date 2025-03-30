"use client"
import { useParams } from 'next/navigation';
import React from 'react'

const OrderDetails = () => {

  const params = useParams<{ orderId: string; }>()

  return (
    <div className="main-view">
      <h1>order {params.orderId}</h1>
    </div>
  )
}

export default OrderDetails