"use client"
import React from 'react'
import { IoIosNotificationsOutline, IoIosMenu } from "react-icons/io";
import { FaCog } from "react-icons/fa";
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { setViewSidebar } from '@/lib/slices/globalSlice';

const Header = () => {

    const { viewSidbar } = useSelector((state: RootState) => state.globalSlice);
    const dispatch = useDispatch();
    const toggleSidebar = () => {
      dispatch(setViewSidebar(!viewSidbar));
    }

  return (
    <div className='flex justify-between items-center xs:mb-28 md:mb-8'>
        <div className='flex'>
          <button 
            className='text-[50px] xs:block xl:hidden'
            onClick={toggleSidebar}
            >
              <IoIosMenu />
            </button>
          <form className='md:hidden md:ml-8'>
              <div className='w-fit h-12'>
                  <input 
                  type='text' 
                  placeholder='search something' 
                  className='h-full md:w-88 lg:w-96 px-7 rounded-md bg-white shadow-md'
                  />
              </div>
          </form>
        </div>
        <div className='xs:hidden md:flex'>
          <button className='header-icon'>
            <IoIosNotificationsOutline />
          </button>
          <button className='header-icon ml-4'>
            <FaCog />
          </button>
        </div>
        <Image
          src="/images/user.jpg"
          width={64}
          height={64}
          alt="profile"
          className=' ml-9 bg-white p-2 rounded-full shadow-md'
        />
      </div>
  )
}

export default Header