import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAgencys, agencyNames } from '../redux/actions'
import Navbar from '../Components/Navbar'
import { preloadData } from '../assets/preloadData'

export default function AgencysPage() {
  const allAgencys = useSelector((state) => state.allAgencys)
  const agencyNamesArr = useSelector((state) => state.agencyNamesArr)
  const dispatch = useDispatch();
  /* Creating an array of objects with the name of the agency, the total sales and the comission. */
  let agencyGroup = agencyNamesArr?.map(n => {
    let obj = {
      agencyName: n,
      sales: allAgencys?.filter(a => a.nameAgency === n).reduce((a, b) => a + b.finalPrice, 0),
      comision: (allAgencys?.filter(a => a.nameAgency === n).reduce((a, b) => a + b.finalPrice, 0)) * .025
    }
    return obj;
  })

  useEffect(() => {
    dispatch(getAgencys())
    dispatch(agencyNames())
  }, [])


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
      {agencyGroup ?
        <table className='table'>
          <thead>
            <tr>
              <th>Nombre empresa</th>
              <th>Total de ventas</th>
              <th>Comisión</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            {agencyGroup?.map(n =>
              <tr>
                <td>{n.agencyName}</td>
                <td>$ {n.sales}</td>
                <td>$ {n.comision}</td>
                <td><a href={`empresas/${n.agencyName}`}>Ver detalle</a></td>
              </tr>
            )}

          </tbody>
        </table>
        : null}

    </div>
  )
}
