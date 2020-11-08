import React from 'react'
import './Nav.css'
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Navbar3() {
    return (
        <div>
            <nav className="nav">
            <div className="head">
            <Link to="/home">
            <img className="header__logo" src="images/brand.png" alt=""/>
            </Link>
        </div>
                <div className="user">
                    <Link to="/home" style={{textDecoration:"none",color:"black"}}>
                    <div className="navicon">
                    <HomeIcon style={{fontSize:40}}/>
                    Home
                    </div>
                    </Link>
                    <div className="navicon">
                    <AccountCircleIcon style={{fontSize:40}}/>
                    Athul
                    </div>
                
                </div>

        </nav>
        </div>
    )
}

export default Navbar3
