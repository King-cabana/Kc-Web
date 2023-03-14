import React from 'react'
import { GuestDetails } from './GuestRegistrationStyled'

const Guest = (props) => {
  return (
    <GuestDetails>
        <div><img src={props.image} alt="icon"/> <h4>{props.title}</h4></div>
        <p>{props.desc}</p>
        <p>{props.descTwo}</p>
    </GuestDetails>
  )
}

export default Guest