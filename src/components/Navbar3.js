import React from 'react'
import './Nav.css'
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Navbar3() {
    return (
        <div>
            <nav className="nav">
            <div className="head">
            <img className="header__logo" src="images/brand.png" alt=""/>
        </div>
                <div className="user">
                    <div className="navicon">
                    <HomeIcon style={{fontSize:40}}/>
                    Home
                    </div>
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
