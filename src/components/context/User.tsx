import React from 'react'
import { USerContext } from './UserContext'
import { useContext } from 'react'

const User = () => {
const userContext=useContext(USerContext)

const handlelogin=()=>{
    if(userContext){
        userContext.setUser({
            name:'Krishna',
            email:'kjamadar26@gmail.com'
        })
    }
}

const handlelogout=()=>{
    if(userContext){
        userContext.setUser({
            name:'',
            email:''
        })
    }
}

  return (
    <div>
        <button onClick={handlelogin}>Login In</button>
        <button onClick={handlelogout}>Log Out</button>
        <h2>Username is {userContext?.user?.name}</h2>
        <h2>Email Id is {userContext?.user?.email}</h2>
    </div>
  )
}

export default User