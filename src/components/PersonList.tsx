import React from 'react'
import { Name } from './Person.types'

type PersonProps={
    names:Name[]
}

const PersonList = (props:PersonProps) => {
  return (
    <div>
        {
            props.names.map(name=><h2>{name.first} {name.last}</h2>)
        }
    </div>
  )
}

export default PersonList