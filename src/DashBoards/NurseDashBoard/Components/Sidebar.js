import React from 'react'
import  {NavLink} from 'react-router-dom'

export default function Sidebar(){
    return(
       <div className='sideBar'>
        
       <ul className='SideBarList'>
       <header>Nurse Dashboard</header>
        <li className='hregList'><NavLink to='/RegisterVitals'> RegisterVitals</NavLink></li>
        <li className='hregList'><NavLink to='/ShowVitals'> ShowVitals</NavLink></li>
      
       </ul>
       </div>
    )
}