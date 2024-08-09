import React from 'react'

import "./index.css"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className='mainDiv'>
       
      <Link  className="link" to="/login"><button className="login" >Login</button></Link>
      <Link  className="link" to="/register"> <button className="register" >Register</button>{' '}</Link>
      </div>
    )
  }


export default Home