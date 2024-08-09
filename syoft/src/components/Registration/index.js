import { Link ,useNavigate} from "react-router-dom";
import "./index.css";
import { useState} from "react";
//import axios from "react-axios"


// import { Link } from "memfs/lib/node";

const Registration=()=> {
  const navigate=useNavigate();
  const [input,setInput]=useState({name:"",email:"",password:"",company:""})
 /* const [name,setname]=useState(" ")
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")
    const [company,setCompany]=useState("")*/
    const [checked,setChecked]=useState(false)
    const [error,setError]=useState("")
    const [loading,setloading]=useState("")

  

  const submitForm=async(e)=>{
    e.preventDefault()
    localStorage.setItem("user",JSON.stringify(input))
    navigate("/Login")
    
   /* try {
        const config={
            headers:{
                "Content-Type":"application/json"
            }
        }
        setloading(true)
        const {data} = await axios.post("/api/users",{
          name,  email,password,company
        },config)
        console.log(data)
        localStorage.setItem("userInfo",JSON.stringify(data))
        setloading(false)
    } catch (error) {
        console.log(error.message)
    }*/
}  
    return (
      <div className="signup-container">
        <img
          src="https://res.cloudinary.com/dj2tk6c0s/image/upload/v1721041221/hava%20havi/Screenshot_2024-07-15_162937_wcmxjj.png"
          alt="login-img"
          className="login-img"
        />
        <form className="form-container" onSubmit={submitForm}>
          <img
            src="https://res.cloudinary.com/dj2tk6c0s/image/upload/v1692078580/insta%20share/Groupwebsitelogo_uii4cq.jpg"
            alt="website_logo"
            className="login_website_logo"
          />
          <h1 className="website-title">Syoft Share</h1>
          <p className="paragraph">Already have an account? <Link  className="link" to="/login">Login</Link></p>
          <div className="input-container">
            <label className="input-label" htmlFor="username">
              Full name*
            </label>
            <input
              type="text"
              id="username"
              name="name"
              className="user-input-field"
              placeholder="Username"
              value={input.name}
              onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
             
            />

           
          </div>

          <div className="input-container">
            <label className="input-label" htmlFor="email">
              Email address*
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="user-input-field"
              placeholder="email@gmail.com"
              value={input.email}
              onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
              
            />
          
          </div>

          <div className="input-container">
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="password-input-field"
              placeholder="Password"
              value={input.password}
              onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
            
            />
           
          </div>

           <div className="input-container">
            <label className="input-label" htmlFor="company">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="user-input-field"
              placeholder="Company"
              value={input.company}
              onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
            
            />
           
          </div>
          <div className="check-input-container">
            <input
              type="checkbox"
              id="terms"
              className="checkbox-input-field"
              placeholder="Company"
              checked={checked}
              onChange={(e)=>setChecked(!checked)}
            />
            <label className="input-label" htmlFor="terms">
              I agree to the <span className="span">Terms of service</span> and
              <span className="span"> Privacy Policy</span>
            </label>
            {checked === true?" ": <p className="error-message">Required</p>}
          </div>

          <button type="submit" className="signup-button">
            signUp
          </button>
          {error && (
            <p className="error-message">*Fill all inputFields</p>
          )}
        </form>
      </div>
    );
}


export default Registration;
