import React from 'react'
import  {NavLink} from 'react-router-dom'

export default function Nav(){
    return(
        <nav className='nav'>
        <h1><NavLink to='/ResDash'> Logo </NavLink></h1>
       
        </nav>
    )
}