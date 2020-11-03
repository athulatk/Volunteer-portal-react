import React,{useState} from 'react'
import './Nav.css'
import {Modal,ModalTitle} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Navbar1() {

    const [see,setSee]=useState(false);
    const handleClose = () => setSee(false);
    const handleShow = () => setSee(true);

    return (
        <>
        <nav className="nav">
            <div className="head">
            <img className="header__logo" src="images/brand.png" alt=""/>
            </div>
                <ul className="nav__buttons">
                    <li><Link to="/signup"><button className="nav__btn">Sign Up</button></Link></li>
                    <li><button onClick={handleShow} className="nav__btn">Log In</button></li>
                </ul>

        </nav>
        <Modal show={see} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
        <ModalTitle className="form_lab">Log In</ModalTitle>
        </Modal.Header>
        <Modal.Body>
        <form className="login__form">
        <p className="form_lab">Email</p>
        <input className="form__input" type="text" email="email" />
        <hr/>
        <p className="form_lab">Password</p>
        <input className="form__input" type="password"/>
        <hr/>
        <div className="btn1">
        <button className="form__btn" type="submit">Go!</button>
        </div>
        </form>
        </Modal.Body>
        </Modal>
        </>
    )
}

export default Navbar1
