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
            <p className="form2__lab">Name </p>
            <input className="form2__input" type="text" name="name" />
            <p className="form2__lab">Choose role:</p>
            <input type="radio"/> <label className="radio_1">Student/Volunteer</label><br/>
            <input type="radio"/> <label className="radio_1">Organization</label><br/>
            <p className="form2__lab">Email </p>
            <input className="form2__input" type="email" name="email" />
            <p className="form2__lab">Password </p>
            <input className="form2__input" type="password"/>
            <p className="form2__lab">Confirm Password </p>
            <input className="form2__input" type="password"/>
            <br/><br/>
            <div className="btn">
            <button className="form__btn" type="submit">Submit</button>
            </div>
            </form>
            </div>
    )
}

export default Signup
