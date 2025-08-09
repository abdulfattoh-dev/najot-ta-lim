import React from 'react'

const Payments = () => {
  return (
    <div>
      <div className='pt-7'>
        <select className='bg-white border-1 border-gray-300 rounded-lg p-2.5 active:border-[#BC8E5B] active:border-2' name="" id="">
          <option value="">All</option>
          <option value="">Paid</option>
          <option value="">Unpaid</option>
          <option value="">Unconfirmed</option>
        </select>
      </div>
    </div>
  )
}

export default React.memo(Payments)