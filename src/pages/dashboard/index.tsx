import React from 'react'
import logo from "../../assets/logo.svg";
import { NavLink, Outlet } from 'react-router-dom';
import { House, CreditCard, Users, ChartColumn, ChartNoAxesColumn, ShoppingCart, GraduationCap, Settings } from 'lucide-react'

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='w-64 h-screen p-[10px] sticky top-0 left-0 overflow-auto'>
                <div className='mb-[15px] mt-[5px] flex justify-center'>
                    <img src={logo} alt="" />
                </div>
                <ul className='flex flex-col gap-1'>
                    <li>
                        <NavLink className={({ isActive }) => `flex gap-5 py-3 px-5 rounded-[10px] ${isActive ? 'bg-[#EEEAE5] text-[#BC8E5B]' : 'bg-white text-black'}`} end={true} to={''}>
                            {({ isActive }) => (
                                <>
                                    <div className={isActive ? 'text-[#BC8E5B]' : 'text-[#707070]'}><House /></div>
                                    <div>Home</div>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `flex gap-5 py-3 px-5 rounded-[10px] ${isActive ? 'bg-[#EEEAE5] text-[#BC8E5B]' : 'bg-white text-black'}`} to={'payments'}>
                            {({ isActive }) => (
                                <>
                                    <div className={isActive ? 'text-[#BC8E5B]' : 'text-[#707070]'}><CreditCard /></div>
                                    <div>Payments</div>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `flex gap-5 py-3 px-5 rounded-[10px] ${isActive ? 'bg-[#EEEAE5] text-[#BC8E5B]' : 'bg-white text-black'}`} to={'groups'}>
                            {({ isActive }) => (
                                <>
                                    <div className={isActive ? 'text-[#BC8E5B]' : 'text-[#707070]'}><Users /></div>
                                    <div>Groups</div>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `flex gap-5 py-3 px-5 rounded-[10px] ${isActive ? 'bg-[#EEEAE5] text-[#BC8E5B]' : 'bg-white text-black'}`} to={'pointers'}>
                            {({ isActive }) => (
                                <>
                                    <div className={isActive ? 'text-[#BC8E5B]' : 'text-[#707070]'}><ChartColumn /></div>
                                    <div>Pointers</div>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `flex gap-5 py-3 px-5 rounded-[10px] ${isActive ? 'bg-[#EEEAE5] text-[#BC8E5B]' : 'bg-white text-black'}`} to={'rating'}>
                            {({ isActive }) => (
                                <>
                                    <div className={isActive ? 'text-[#BC8E5B]' : 'text-[#707070]'}><ChartNoAxesColumn /></div>
                                    <div>Rating</div>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `flex gap-5 py-3 px-5 rounded-[10px] ${isActive ? 'bg-[#EEEAE5] text-[#BC8E5B]' : 'bg-white text-black'}`} to={'shop'}>
                            {({ isActive }) => (
                                <>
                                    <div className={isActive ? 'text-[#BC8E5B]' : 'text-[#707070]'}><ShoppingCart /></div>
                                    <div>Shop</div>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `flex gap-5 py-3 px-5 rounded-[10px] ${isActive ? 'bg-[#EEEAE5] text-[#BC8E5B]' : 'bg-white text-black'}`} to={'lessons'}>
                            {({ isActive }) => (
                                <>
                                    <div className={isActive ? 'text-[#BC8E5B]' : 'text-[#707070]'}><GraduationCap /></div>
                                    <div>Lessons</div>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `flex gap-5 py-3 px-5 rounded-[10px] ${isActive ? 'bg-[#EEEAE5] text-[#BC8E5B]' : 'bg-white text-black'}`} to={'settings'}>
                            {({ isActive }) => (
                                <>
                                    <div className={isActive ? 'text-[#BC8E5B]' : 'text-[#707070]'}><Settings /></div>
                                    <div>Settings</div>
                                </>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1 bg-[#EEF2F6]'>
                <div className='w-full h-[70px] bg-white sticky top-0 left-0'></div>
                <div className='p-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default React.memo(Dashboard)