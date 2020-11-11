import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {Modal,ModalTitle} from 'react-bootstrap'

function Login(props) {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState(""); 
    const[msg,setMsg]=useState("");
    let history=useHistory();
    const Loginaction = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3001/auth/Login",{
          email:email,
          password:password,
        }).then((res) => {
            if(res.data.logged){
                console.log(res)
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
    }

    return (
       
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
        <ModalTitle className="form_lab">Log In</ModalTitle>
        </Modal.Header>
        <Modal.Body>
        <form className="login__form" onSubmit={Loginaction}>
        <p className="form_lab">Email</p>
        <input onChange={(e)=>{setEmail(e.target.value)}}className="form__input" type="text" email="email" value={email} required/>
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
    )
}

export default Login
