import React from 'react'
import Navbar1 from './components/Navbar1'
import Navbar2 from './components/Navbar2'
import './Signup.css'
function Signup() {
    return (
        <div>
            <Navbar1/>
            <Navbar2/>
            <h2 className="sign_up">Sign up</h2>
            <form className="signup__form">
            <p className="form2_lab">Email:</p>
            <input className="form2__input" type="text" email="email" />
            <p className="form2_lab">Password:</p>
            <input className="form2__input" type="password"/>
            <hr/>
            <button className="form__btn" type="submit">Sign Up</button>
            </form>
            </div>
    )
}

export default Signup
