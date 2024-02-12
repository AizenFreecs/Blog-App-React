import React, { useDebugValue } from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../reduxStore/authSlice/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const handleLogout = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full hover:shadow-lg transition  ease-in-out focus:outline-none"
    onClick={handleLogout}>Logout</button>
  )
}

export default LogoutBtn