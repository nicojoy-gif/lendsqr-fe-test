import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../LoginPage/Login'
import Dashboard from '../DashboardPage/Dashboard'
import UserDetails from '../UserDetailsPage/UserDetails'

type Props = {}

const Router = (props: Props) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/userdetails' element={<UserDetails />} />
        </Routes></>
  )
}

export default Router