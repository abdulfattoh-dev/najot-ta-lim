import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Rating = () => {
  return (
    <div>
      <div>
        <ul className='flex gap-6'>
          <li>
            <NavLink end={true} to={''}>
              {({ isActive }) => (
                <button className={isActive ? 'my-3 px-7 pb-2 text-[#BC8E5B] border-b-3' : 'my-3 px-7 pb-2 text-[#707070] hover:text-black'}>All</button>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={'programming'}>
              {({ isActive }) => (
                <button className={isActive ? 'my-3 px-7 pb-2 text-[#BC8E5B] border-b-3' : 'my-3 px-7 pb-2 text-[#707070] hover:text-black'}>Programming</button>
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

export default React.memo(Rating)