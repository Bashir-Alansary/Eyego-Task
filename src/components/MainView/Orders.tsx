"use client"
import React, { useEffect } from 'react'
import Order from '../Order/Order';
import { OrderType } from '@/types';
import { ordersTableThs } from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/lib/store';
import { fetchOrders } from '@/lib/slices/fetchSlice';
import TableLoading from '../TableLoading';

const Orders = () => {

const {orders, loading, error} = useSelector((state:RootState)=>state.fetchSlice);
    const dispatch = useDispatch<AppDispatch>();
  
useEffect(()=>{
    dispatch(fetchOrders());
}, [])

console.log(error);

  
    if (loading) {
        return (
        <TableLoading pageLength={5} />
        )
    }

  return (
  <div className="main-view">
    <h1 className='main-h1'>Refund Orders</h1>
    <div className='table-parent'>
      <table className="main-table">
        <thead className="main-thead">
          <tr>
            {
              ordersTableThs.map(tableTh => {
                const {id, name} = tableTh;
                return (
                  <th key={id} className="main-th">{name}</th>
                )
              })
            }
          </tr>
        </thead>

        <tbody className="main-tbody">
          {
            orders.map((order:OrderType) => <Order key={order.id} {...order} />)
          }
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Orders