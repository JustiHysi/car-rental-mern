import React, { useEffect } from 'react'
import { useState } from "react";
import { dummyMyBookingsData } from '../assets/assets';

const MyBookings = () => {

  const[bookings,setBookings]=useState([]);

  const fetchMyBookings = async ()=> {
    setBookings(dummyMyBookingsData)
  }

  useEffect(()=>{
    fetchMyBookings()
  },[])


  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 2xl: '>

    </div>
  )
}

export default MyBookings