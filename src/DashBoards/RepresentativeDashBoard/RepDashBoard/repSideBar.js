import React from 'react'
import  {NavLink} from 'react-router-dom'

export default function Sidebar(){
    return(
       <div className='sideBar'>
        
       <ul className='SideBarList'>
       <header>Rep Dashboard</header>
        <li className='hregList'><NavLink to='/HospialRegistrationForm'> register Hospital </NavLink></li>
        <li className='hregList'><NavLink to='/UserRegistrationForm'> register User </NavLink></li>
        
       </ul>
       </div>
    )
}