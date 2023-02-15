import React from 'react'
import  {NavLink} from 'react-router-dom'

export default function Sidebar(){
    return(
       <div className='sideBar'>
        
       <ul className='SideBarList'>
       <header>Admin Dashboard</header>
        <li className='hregList'><NavLink to='/RegisterNewPatient'> register New Patient </NavLink></li>
      
       </ul>
       </div>
    )
}