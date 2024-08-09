import { useState } from "react";
import axios from 'react-axios'

import {Link ,useNavigate} from "react-router-dom";
import "./index.css";

const Login =()=>{
  const navigate=useNavigate();
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")
    const [error,setError]=useState("")
    const [loading,setloading]=useState("")

  
    

  const submitForm=async(e)=>{
    e.preventDefault()
    const data= JSON.parse(localStorage.getItem("user"))
    if (email==="" &&password===""){
      alert("incorrect credientls");
    }
    else if (email===data.email && password===data.password ){
navigate("/dashboard")
    }else {

      alert("incorrect credientls");
    }
    console.log("clicked")
    /*try {
        const config={
            headers:{
                "Content-Type":"application/json"
            }
        }
        setloading(true)
        const {data} = await axios.post("/api/users/login",{
            email,password
        },config)
        console.log(data)
        localStorage.setItem("userInfo",JSON.stringify(data))
        
        setloading(false)
    } catch (error) {
        console.log(error.message)
    }*/
}
  

  

    // const jwtToken = Cookies.get('jwt_token')
    // if (jwtToken !== undefined) {
    //   return <Redirect to="/" />
    // }

    return (
      <div className="login-container">
        <form className="form-container" onSubmit={submitForm}>
          <img
            src="https://res.cloudinary.com/dj2tk6c0s/image/upload/v1692078580/insta%20share/Groupwebsitelogo_uii4cq.jpg"
            alt="website_logo"
            className="login_website_logo"
          />
          <h1 className="website-title">syoft </h1>
          <div className="input-container">
            <label className="input-label" htmlFor="username">
             Email
            </label>
            <input
              type="text"
              id="username"
              className="user-input-field"
              placeholder="Username"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="password-input-field"
              placeholder="Password"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {error && <p className="error-message">*{error}</p>}
        </form>
        <Link  className="link" to="/register">Register Now</Link>
      </div>
    );
}

export default Login;
