import React,{useState} from 'react'
import './Login.css'
import Logo from '../../assets/logo.png';
import {signup,login} from '../../firebase'
import spinner from '../../assets/netflix_spinner.gif'
const Login = () => {
  const[signstate,Setsignstate] = useState('Sign In')
  const[name,setName] = useState("")
   const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[loading,setLoading] = useState(false)
  
    const user_auth = async(event)=>{
      event.preventDefault();
      setLoading(true)
      if(signstate==="Sign In"){
       await login(email,password)
      }
      else {
        await signup(name,email,password)
      }
      setLoading(false)
    }
  return (
    loading?<div className='loading-gif'><img src={spinner} alt="" /></div>
    :<div className='form-overall'>
    <img src={Logo} alt="" className='logo' />
    <div className="form">
      <h2>{signstate}</h2>
      <form>
        {signstate==="Sign Up"? <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Your Name' />:<></>}
       
          <input type="text"  value={email} onChange={(e)=>{setEmail(e.target.value)}}placeholder='Email' />
            <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
          <button onClick={user_auth} type='submit'>{signstate} </button>
            <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
             <label htmlFor="">Remember me</label>
            </div>
            <div className="help">
              <p>Need Help?</p>
            </div>
            </div>
             <div className="form-new">
              {signstate==="Sign In"?   <p>New to Netflix?<span onClick={()=>{Setsignstate("Sign Up")}}>Sign Up Now</span></p>
              :<p>Already have Account?<span onClick={()=>{Setsignstate("Sign In")}}>Sign In Now</span></p>
            }
   
       
    </div>
      </form>
    </div>
   
  </div>
  )
}

export default Login
