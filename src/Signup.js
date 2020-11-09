import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import Navbar1 from './components/Navbar1'
import Navbar2 from './components/Navbar2'
import Axios from 'axios'
import './Signup.css'
function Signup() {

    const[name,setName]=useState("");
    const[role,setRole]=useState("");
    const[email,setEmail]=useState("");
    const[pass1,setPass1]=useState("");
    const[pass2,setPass2]=useState("");
    const[password,setPassword]=useState("");
    let history=useHistory();


   /* function confirmPassword(){
        if(pass1===pass2){
            setPassword(pass1)
        }
        else{
            setPassword("")
        }

    }*/

    function onSubmit(e){
        e.preventDefault();
        //confirmPassword();
        /*Axios.post("https://localhost:3001/Signup",{
          name:name,
          email:email,
          designation:role,
          password:pass1,
          confirm:pass2,
        }).then((res) => {
            console.log(res)
        }).catch(error=>{
            console.log(error)
        })*/
        history.push("/home")

        
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
            <input onChange={(e)=>{setRole(e.target.value)}} type="radio" name="designation" value="student"/> <label className="radio_1">Student/Volunteer</label><br/>
            <input onChange={(e)=>{setRole(e.target.value)}} type="radio" name="designation" value="organization"/> <label className="radio_1">Organization</label><br/>
            <p className="form2__lab">Email </p>
            <input onChange={(e)=>{setEmail(e.target.value)}} className="form2__input" type="email" name="email" value={email}/>
            <p className="form2__lab">Password </p>
            <input onChange={(e)=>{setPass1(e.target.value)}} className="form2__input" type="password" value={pass1}/>
            <p className="form2__lab">Confirm Password </p>
            <input onChange={(e)=>{setPass2(e.target.value)}} className="form2__input" type="password" value={pass2}/>
            <br/><br/>
            <div className="btn">
            <button onClick={onSubmit} className="form__btn" type="submit">Submit</button>
            </div>
            </form>
            </div>
    )
}

export default Signup
