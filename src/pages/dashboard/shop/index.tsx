import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Shop = () => {
  return (
    <div>
      <div>
        <ul className='flex gap-6'>
          <li>
            <NavLink end={true} to={''}>
              {({ isActive }) => (
                <button className={isActive ? 'my-3 px-7 pb-2 text-[#BC8E5B] border-b-3' : 'my-3 px-7 pb-2 text-[#707070] hover:text-black'}>Sale</button>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={'bought'}>
              {({ isActive }) => (
                <button className={isActive ? 'my-3 px-7 pb-2 text-[#BC8E5B] border-b-3' : 'my-3 px-7 pb-2 text-[#707070] hover:text-black'}>Bought</button>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default React.memo(Shop)