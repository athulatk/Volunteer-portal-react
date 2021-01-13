import React,{useState,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {Modal,ModalTitle} from 'react-bootstrap'
import {LoginContext} from './LoginContext'

function Login(props) {

    const[loginstatus,setLoginstatus]=useContext(LoginContext)
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState(""); 
    const[msg,setMsg]=useState("");
    let history=useHistory();

    const Loginaction = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3001/auth/Login",{   //
          email:email,
          password:password,
        }).then((res) => {
            if(res.data.logged){
                setLoginstatus({userEmail:email,logged:true})
                if(res.data.result[0].DESIGNATION==="organization")
                    history.push("/homeorg")
                else
                    history.push("/home")
            }
            else{
                setMsg("Incorrect credentials");
            }
            
        }).catch(error =>{
            console.log(error)
        })

        //Fetch Profile on login and put name into global state
    }

    return (
       <>
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
        <ModalTitle className="form_lab">Log In</ModalTitle>
        </Modal.Header>
        <Modal.Body>
        <form className="login__form" onSubmit={Loginaction}>
        <p className="form_lab">Email</p>
        <input onChange={(e)=>{setEmail(e.target.value)}}className="form__input" type="text" name="email" value={email} required/>
        <hr/>
        <p className="form_lab">Password</p>
        <input onChange={(e)=>{setPassword(e.target.value)}}className="form__input" type="password" value={password} required/>
        <hr/>
        <div className="btn1">
        <button className="form__btn" type="submit">Go!</button>
        </div>
        </form>
        <br/>
        <h5 style={{textAlign:"center",color:"red"}}>{msg}</h5>
        </Modal.Body>
        </Modal>
        </>
    )
}


export default Login
