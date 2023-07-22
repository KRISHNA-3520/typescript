import React from 'react'

type OscarProps={
    children:React.ReactNode
}

const Oscar = (props:OscarProps) => {
  return (
    <div>
        <h1>Text from Oscar</h1>
        {props.children}
    </div>
  )
}

export default Oscar