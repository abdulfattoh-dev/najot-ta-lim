import React, { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

const Dashboard = lazy(() => import('./dashboard'))
const Home = lazy(() => import('./dashboard/home'))

const Payments = lazy(() => import('./dashboard/payments'))
const PaymentsAll = lazy(() => import('./dashboard/payments/All'))
const PaymentsPaid = lazy(() => import('./dashboard/payments/Paid'))
const PaymentsUnpaid = lazy(() => import('./dashboard/payments/Unpaid'))
const PaymentsUnconfirmed = lazy(() => import('./dashboard/payments/Unconfirmed'))

const Students = lazy(() => import('./dashboard/students'))
const StudentsCreate = lazy(() => import('./dashboard/students/Create'))
const StudentsAll = lazy(() => import('./dashboard/students/All'))

const Pointers = lazy(() => import('./dashboard/pointers'))

const Rating = lazy(() => import('./dashboard/rating'))
const RatingAll = lazy(() => import('./dashboard/rating/All'))
const RatingProgramming = lazy(() => import('./dashboard/rating/Programming'))

const Shop = lazy(() => import('./dashboard/shop'))
const ShopSale = lazy(() => import('./dashboard/shop/Sale'))
const ShopBought = lazy(() => import('./dashboard/shop/Bought'))

const Lessons = lazy(() => import('./dashboard/lessons'))
const Settings = lazy(() => import('./dashboard/settings'))

const MainRouters = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {
                useRoutes(
                    [
                        {
                            path: '/',
                            element: <Dashboard />,
                            children: [
                                { index: true, element: <Home /> },
                                {
                                    path: 'payments', element: <Payments />, children: [
                                        { index: true, element: <PaymentsAll /> },
                                        { path: 'paid', element: <PaymentsPaid /> },
                                        { path: 'unpaid', element: <PaymentsUnpaid /> },
                                        { path: 'unconfirmed', element: <PaymentsUnconfirmed /> }
                                    ]
                                },
                                {
                                    path: 'students', element: <Students />, children: [
                                        { index: true, element: <StudentsCreate /> },
                                        { path: 'all', element: <StudentsAll /> }
                                    ]
                                },
                                { path: 'pointers', element: <Pointers /> },
                                {
                                    path: 'rating', element: <Rating />, children: [
                                        { index: true, element: <RatingAll /> },
                                        { path: 'programming', element: <RatingProgramming /> }
                                    ]
                                },
                                {
                                    path: 'shop', element: <Shop />, children: [
                                        { index: true, element: <ShopSale /> },
                                        { path: 'bought', element: <ShopBought /> }
                                    ]
                                },
                                { path: 'lessons', element: <Lessons /> },
                                { path: 'settings', element: <Settings /> },
                            ]
                        }
                    ]
                )
            }
        </Suspense>
    )
}

export default React.memo(MainRouters)