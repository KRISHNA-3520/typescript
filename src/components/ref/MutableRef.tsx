import React, { useEffect, useRef, useState } from 'react'

const MutableRef = () => {
    const [timer,setTimer]=useState(0)
    const inputRef=useRef<number|undefined>(undefined)

    const stopTimer=()=>{
        window.clearInterval(inputRef.current)
    }

    useEffect(()=>{
        inputRef.current=window.setInterval(()=>{
            setTimer(timer=>timer+1)
        })
        return()=>{
            stopTimer()
        }    
    },[])
  return (
    <div>
        Hook - {timer}
        <button onClick={()=>stopTimer}>STOP TIMER</button>
    </div>
  )
}

export default MutableRef