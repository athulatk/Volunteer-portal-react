import React,{useContext} from 'react'
import './Nav.css'
import axios from 'axios'
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {LoginContext} from '../LoginContext'
function Navbar4() {
    const[loginstatus,setLoginstatus]=useContext(LoginContext)
    const logoutfun = () =>{
        axios.delete('http://localhost:4000/auth/Logout')
        .then(response=>console.log(response))
        setLoginstatus({userEmail:"",logged:false})
    }
    return (
        <div>
            <nav className="nav">
            <div className="head">
            <Link to="/homeorg">
            <img className="header__logo" src="/images/brand.png" alt=""/>
            </Link>
        </div>
                <div className="user">
                    <Link to="/homeorg" style={{textDecoration:"none",color:"black"}}>
                    <div className="navicon">
                    <HomeIcon style={{fontSize:40}}/>
                    Home
                    </div>
                    </Link>
                    <div className="navicon dropdown dropbtn">
                    <AccountCircleIcon style={{fontSize:40}}/>
                    <br/>
                    {loginstatus.userEmail}
                    {/*<a href="#" className="dropbtn"></a>*/}
                    <div className="dropdown-content">
                    <Link to="/profile" style={{textDecoration:"none"}}>Profile</Link>
                    <Link to ="/" style={{textDecoration:"none"}} onClick={logoutfun}>Sign Out</Link>
                    </div>
                    </div>
                </div>

        </nav>
        </div>
    )
}

export default Navbar4
