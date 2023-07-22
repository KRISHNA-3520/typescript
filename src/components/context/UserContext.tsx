import { createContext, useState } from "react"

type AuthUSer={
    name:string
    email:string
}

type UserContextType={
    user:AuthUSer|null
    setUser:React.Dispatch<React.SetStateAction<AuthUSer | null>>
}

type UserContextProvider={
    children:React.ReactNode
}

export const USerContext=createContext<UserContextType|null>(null)

export const UserContextProvider=({children}:UserContextProvider)=>{
const [user,setUser]=useState<AuthUSer|null>(null)

return(
    <USerContext.Provider value={{user,setUser}}>{children}</USerContext.Provider>
)   
}