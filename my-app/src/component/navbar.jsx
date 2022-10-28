import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{width:'100%',height:'60px',border:'1px solid'}}>
        <div style={{margin:'center'}}>
       <Link to='/' ><div>Home</div></Link>
        
        </div>
    </div>
  )
}

export default Navbar