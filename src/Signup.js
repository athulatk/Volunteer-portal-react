import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import Navbar1 from './components/Navbar1'
import Navbar2 from './components/Navbar2'
import axios from 'axios'
import './Signup.css'
function Signup() {

    const[name,setName]=useState("");
    const[designation,setDesignation]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirm,setConfirm]=useState("");
    let history=useHistory();
    axios.defaults.baseURL="https://localhost:3001"

    function onSubmit(e){
        e.preventDefault();
        axios.post("auth/Signup",{
          name:name,
          email:email,
          designation:designation,
          password:password,
          confirm:confirm
        }).then((res) => {
            console.log(res)
        }).catch(error =>{
            console.log(error)
        })
        //history.push("/home")

        
    }

    return (
        <div>
            <Navbar1/>
            <Navbar2/>
            <h2 className="sign_up">Sign up</h2>
            <form className="signup__form">
            <p className="form2__lab">Name </p>
            <input onChange={(e)=>{setName(e.target.value)}} className="form2__input" type="text" name="name" value={name}/>
            <p className="form2__lab">Choose role:</p>
            <input onChange={(e)=>{setDesignation(e.target.value)}} type="radio" name="designation" value="student"/> <label className="radio_1">Student/Volunteer</label><br/>
            <input onChange={(e)=>{setDesignation(e.target.value)}} type="radio" name="designation" value="organization"/> <label className="radio_1">Organization</label><br/>
            <p className="form2__lab">Email </p>
            <input onChange={(e)=>{setEmail(e.target.value)}} className="form2__input" type="email" name="email" value={email}/>
            <p className="form2__lab">Password </p>
            <input onChange={(e)=>{setPassword(e.target.value)}} className="form2__input" type="password" value={password}/>
            <p className="form2__lab">Confirm Password </p>
            <input onChange={(e)=>{setConfirm(e.target.value)}} className="form2__input" type="password" value={confirm}/>
            <br/><br/>
            <div className="btn">
            <button onClick={onSubmit} className="form__btn" type="submit">Submit</button>
            </div>
            </form>
            </div>
    )
}

export default Signup
