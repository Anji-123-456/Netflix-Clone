
import './Navbar.css'
import Logo from '../../assets/logo.png'
import Search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import dropdown from '../../assets/caret_icon.svg'
import { useRef,useEffect} from 'react'
import { logout } from '../../firebase'
const Navbar = () => {
  const navRef = useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navRef.current.classList.add('nav-dark')
      }
      else{
         navRef.current.classList.remove('nav-dark')
      }
    })
  },[])
  return (
    <div className='nav-bar' ref={navRef}>
    <div className="navbar-left">
      <img src={Logo} alt="logo" className='logo' />
      <ul>
        <li>Home</li>
       <li>TV Shows</li>
      <li>Movies</li>
       <li>New & Popular</li>
        <li>My List</li>
         <li>Browse by Languages</li>
      </ul>
    </div>
    <div className="navbar-right">
     <img src={Search} alt="search" className='icon' />
     <ul>
      <li>Children</li>
     </ul>
     <img src={bell} alt="bell" className='icon' />
     <div className="Profile-bar">
      <img src={profile} alt="profile" className='profile' />
      <img src={dropdown} alt="icon" className='icon' />
      <div className="dropdown">
        <p onClick={()=>{logout()}}>Click to Sign off from Netflix</p>
      </div>
     </div>
    </div>
    </div>
  )
}

export default Navbar
