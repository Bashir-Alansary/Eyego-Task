"use client"
import React, { useEffect, useState } from 'react'
import Order from '../Order/Order';
import { OrderType } from '@/types';
import { ordersTableThs } from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/lib/store';
import { fetchOrders } from '@/lib/slices/fetchSlice';
import TableLoading from '../TableLoading';
import Paginations from '../Paginations';

const Orders = () => {

    const {orders, loading, error} = useSelector((state:RootState)=>state.fetchSlice);
    const dispatch = useDispatch<AppDispatch>();

    /* pagination variables */
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageLength = 5;
    const pages = Math.ceil(orders.length / pageLength);
    const startIndex = (currentPage - 1) * pageLength;
    const endIndex = startIndex + pageLength;
    const shownOrders = orders.slice(startIndex, endIndex);
    
    useEffect(()=>{
        dispatch(fetchOrders());
    }, [orders.length])
  
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
            shownOrders.map((order:OrderType) => <Order key={order.id} {...order} />)
          }
        </tbody>
      </table>
    </div>
    <Paginations 
      currentPage={currentPage}
      setCurrentPage={setCurrentPage} 
      pages={pages} 
    />
  </div>
  )
}

export default Orders