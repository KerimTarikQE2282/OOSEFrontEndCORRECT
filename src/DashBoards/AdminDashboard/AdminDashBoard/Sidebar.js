import React from 'react'
import  {NavLink} from 'react-router-dom'

export default function Sidebar(){
    return(
       <div className='sideBar'>
        
       <ul className='SideBarList'>
       <header>Admin Dashboard</header>
        <li className='hregList'><NavLink to='/HospialRegistrationForm'> register Hospital </NavLink></li>
        <li className='hregList'> <NavLink to='/RepresentativeRegistrationForm'> register Representative </NavLink></li>
        <li className='hregList'><NavLink to='/DisplayAllHospitals'>Display All Hospitals</NavLink></li>
       </ul>
       </div>
    )
}