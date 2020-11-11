import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Modal,ModalTitle} from 'react-bootstrap'

function Login(props) {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState(""); 
    let history=useHistory();
    const Loginaction = (e) =>{
        history.push("/home")
    }

    return (
       
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
        <ModalTitle className="form_lab">Log In</ModalTitle>
        </Modal.Header>
        <Modal.Body>
        <form className="login__form">
        <p className="form_lab">Email</p>
        <input onChange={(e)=>{setEmail(e.target.value)}}className="form__input" type="text" email="email" value={email}/>
        <hr/>
        <p className="form_lab">Password</p>
        <input onChange={(e)=>{setPassword(e.target.value)}}className="form__input" type="password" value={password}/>
        <hr/>
        <div className="btn1">
        <button className="form__btn" type="submit" onClick={Loginaction}>Go!</button>
        </div>
        </form>
        </Modal.Body>
        </Modal>
    )
}

export default Login
