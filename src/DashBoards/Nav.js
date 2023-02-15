import React from 'react'
import  {Link} from 'react-router-dom'



export default function Nav(){

   
    return(
        <nav className='nav'>
        <h1><Link to='/AdminDashboard'> Logo </Link></h1>
       
        </nav>
    )
}