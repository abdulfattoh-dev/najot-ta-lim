import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Payments = () => {
  return (
    <div>
      <div className='pt-7'>
        <select className='bg-white border-1 border-gray-300 rounded-lg p-2.5 active:border-[#BC8E5B] active:border-2' name="" id="">
          <NavLink end={true} to={''}>
            <option value="">All</option>
          </NavLink>
          <NavLink to={'paid'}>
            <option value="">Paid</option>
          </NavLink>
          <NavLink to={'unpaid'}>
            <option value="">Unpaid</option>
          </NavLink>
          <NavLink to={'unconfirmed'}>
            <option value="">Unconfirmed</option>
          </NavLink>
        </select>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default React.memo(Payments)