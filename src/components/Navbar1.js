import React,{useState} from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import Login from '../Login'
function Navbar1(){

    const [modalShow,setModalShow]=useState(false);


    return (
        <>
        <nav className="nav">
            <div className="head">
            <Link to="/"><img className="header__logo" src="images/brand.png" alt=""/></Link>
            </div>
                <ul className="nav__buttons">
                    <li><Link to="/signup"><button className="nav__btn">Sign Up</button></Link></li>
                    <li><button onClick={()=>setModalShow(true)} className="nav__btn">Log In</button></li>
                </ul>

        </nav>

        <>
        <Login show={modalShow} onHide={()=>setModalShow(false)}/>
        </>
        </>
    )
}

export default Navbar1
