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
      <div className='totalContainer'>
        <div className='total'>
          <h1>Empresa más ventas</h1>
          <p>$840.000</p>
        </div>
        <div className='total'>
          <h1>Mes más ventas</h1>
          <p>Enero</p>
        </div>
      </div>
        <table className='table'>
          <tr>
            <th>Nombre empresa</th>
            <th>Total de ventas</th>
            <th>Comisión</th>
            <th>Detalle</th>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
        </table>
    </div>
  )
}
