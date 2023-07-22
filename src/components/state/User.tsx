import React, { useState } from 'react'
import { AuthUser } from './User.types'



const User = () => {
    const [user,setUser]=useState<AuthUser>({} as AuthUser)
    const handleLogin=()=>{
        setUser({
            name:'Krishna',
            email:'kjamadar26@gmail.com'
        })
    }
    const handleLogout=()=>{
        setUser({}  as AuthUser)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <h1>User name is {user.name}</h1>
        <h1>User email is {user.email}</h1>
    </div>
  )
}

export default User