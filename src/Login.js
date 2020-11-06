import React,{useState} from 'react'
import {Modal,ModalTitle} from 'react-bootstrap'

function Login({see,setSee,handleClose,handleShow}) {

    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState(""); 


    return (
        <Modal show={see} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
        <ModalTitle className="form_lab">Log In</ModalTitle>
        </Modal.Header>
        <Modal.Body>
        <form className="login__form">
        <p className="form_lab">Email</p>
        <input onChange={(e)=>{setUserName(e.target.value)}}className="form__input" type="text" email="email" />
        <hr/>
        <p className="form_lab">Password</p>
        <input onChange={(e)=>{setPassword(e.target.value)}}className="form__input" type="password"/>
        <hr/>
        <div className="btn1">
        <button className="form__btn" type="submit">Go!</button>
        </div>
        </form>
        </Modal.Body>
        </Modal>
    )
}

export default Login
