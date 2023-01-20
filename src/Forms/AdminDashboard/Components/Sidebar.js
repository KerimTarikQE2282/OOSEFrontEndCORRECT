import React from 'react'
import  {Link} from 'react-router-dom'

export default function Sidebar(){
    return(
       <div className='sideBar'>
        
       <ul className='SideBarList'>
       <header>Admin Dashboard</header>
        <li className='hregList'><Link to='/HospialRegistrationForm'> register Hospital </Link></li>
        <li className='repregList'> <Link to='/RepresentativeRegistrationForm'> register Representative </Link></li>
       </ul>
       </div>
    )
}