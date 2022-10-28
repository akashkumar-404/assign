import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to='/about'><div>About</div></Link>
        <Link to='/head&tail'><div>Head & Tail</div></Link>
    </div>
  )
}

export default Home