import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAgencys } from '../redux/actions'
import Navbar from '../Components/Navbar'

export default function AgencysPage() {
  const allAgencys = useSelector((state) => state.allAgencys)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAgencys())
  }, [])
  console.log(allAgencys[0])
  
  return (
    <div>
      <Navbar />
    </div>
  )
}
