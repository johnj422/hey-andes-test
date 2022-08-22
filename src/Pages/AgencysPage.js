import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAgencys, agencyNames, getTotalSales } from '../redux/actions'
import Navbar from '../Components/Navbar'
import { preloadData } from '../assets/preloadData'
import { Link } from 'react-router-dom'

export default function AgencysPage() {
  const allAgencys = useSelector((state) => state.allAgencys)
  const agencyNamesArr = useSelector((state) => state.agencyNamesArr)
  const dispatch = useDispatch();
  const months = ['null', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Juñio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  let totalSales = [];
  let test = [];
  /* Creating an array of objects with the name of the agency, the total sales and the comission. */
  let agencyGroup = agencyNamesArr?.map(n => {
    let obj = {
      agencyName: n,
      sales: allAgencys?.filter(a => a.nameAgency === n),
      comision: (allAgencys?.filter(a => a.nameAgency === n).reduce((a, b) => a + b.finalPrice, 0)) * .025
    }
    test.push(allAgencys?.filter(a => a.nameAgency === n).reduce((a, b) => a + b.finalPrice, 0));
    totalSales.push(obj.sales)
    return obj;
  })

  let bestMonth = allAgencys?.map(a => Number(a.datePayment.split('-')[1]))

  let bestMonthCount = {};
  bestMonth.forEach(e => {
    bestMonthCount[e] = bestMonthCount[e] + 1 || 1
  });
  let max = Object.values(bestMonthCount).sort((a, b) => a - b);
  let findMax = max[max.length - 1]
  let month
  for (const [key, value] of Object.entries(bestMonthCount)) {
    if (value === findMax) {
      month = parseInt(key)
    }

  }

  useEffect(() => {
    dispatch(getAgencys())
    dispatch(agencyNames())
  }, [])
  useEffect(() => {
    dispatch(getTotalSales(totalSales))
  }, [totalSales])

  return (
    <div>
      <Navbar />
      <div className='totalContainer'>
        <div className='total'>
          <h1>Empresa más ventas</h1>
          <p> ${Math.max(...test).toLocaleString()} </p>
        </div>
        <div className='total'>
          <h1>Mes más ventas</h1>
          <p>{months[month]}</p>
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
                <td>$ {n.sales.reduce((a, b) => a + b.finalPrice, 0).toLocaleString()}</td>
                <td>$ {n.comision.toLocaleString()}</td>
                <td><Link to={`/empresas/${n.agencyName}`}>Ver detalle</Link></td>
              </tr>
            )}
          </tbody>
        </table>
        : null}

    </div>
  )
}
