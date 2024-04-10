import { Route, Routes } from 'react-router-dom'
import Login from '../LoginPage/Login'
import Dashboard from '../DashboardPage/Dashboard'
import UserDetails from '../UserDetailsPage/UserDetails'


const Router = () => {
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