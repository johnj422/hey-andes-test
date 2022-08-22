import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { getTotalSales } from '../redux/actions'

export default function AgencyDetal() {

  const totalSales = useSelector((state) => state.totalSales);
  const { nombre_empresa } = useParams();
  let infoToShow = [];
  let agencyInfo = totalSales.map(o => o.filter(a => a.nameAgency === nombre_empresa))
  agencyInfo.forEach(element => {
    if (element.length > 0) {
      infoToShow = element
    }

  });

  return (
    <div>
      <Navbar />
      <p className='navText'><Link to='/empresas'><span>Empresa</span></Link> {`>`} <span>{nombre_empresa}</span></p>
      <table className='table'>
        <thead>
          <tr>
            <th>Nombre cliente</th>
            <th>Personas</th>
            <th>Día</th>
            <th>Hora</th>
            <th>Valor venta</th>
          </tr>
        </thead>
        <tbody>
          {
            infoToShow && infoToShow?.map(a =>
              <tr>
                <td>{a.name}</td>
                <td>{a.persons}</td>
                <td>{a.day}</td>
                <td>{a.hour}</td>
                <td>{a.finalPrice.toLocaleString()}</td>
              </tr>

            )
          }
        </tbody>
      </table>
    </div>
  )
}