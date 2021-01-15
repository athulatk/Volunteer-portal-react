import React,{useState,useEffect} from 'react'
import Navbar3 from './components/Navbar3'
import Navbar2 from './components/Navbar2'
import {Row,Col,Container} from 'react-bootstrap'
import './Blood.css'
import axios from 'axios'

function Blood() {

    const[name,setName]=useState("");
    const[bloodgrp,setBloodgrp]=useState("");
    const[dob,setDob]=useState("");
    const[sex,setSex]=useState("");
    const[district,setDistrict]=useState("");
    const[phone,setPhone]=useState("");
    const[confirm,setConfirm]=useState("");

    const bloodSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4000/user/enroll/blood',{
            name:name,
            bg:bloodgrp,
            dob:dob,
            sex:sex,
            dist:district,
            ph:phone
        }).then(
            res=>{
                console.log(res)
            }
        )
        console.log(dob)
        alert("Form Submitted")
        
    }


    return (
        <div>
            <Navbar3/>
            <Navbar2/>
            <h2 className="text-center blood_head">Blood Donation Form</h2>
            <form className="blood__form" onSubmit={bloodSubmit}>
                <Container>
                    <Row>
                        <Col lg={2} ><p className="form2__lab">Name</p></Col>
                        <Col lg={10}><input className="blood__input" type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}required/></Col>
                    </Row>
                    <Row>
                        <Col lg={2}><p className="form2__lab">Blood Group</p></Col>
                        <Col lg={10}> 
                        <select name="blood__group" className="blood__input" id="blood_grp" value={bloodgrp} onChange={(e)=>setBloodgrp(e.target.value)}>
                        <option value="">Select blood group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option> 
                        <option value="B+">B+</option> 
                        <option value="B-">B-</option> 
                        <option value="O+">O+</option> 
                        <option value="O-">O-</option> 
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>  
                        </select> </Col>
                    </Row>
                    <Row>
                        <Col lg={2}><p className="form2__lab">DOB</p></Col>
                        <Col lg={10}><input className="blood__input" type="date" value={dob} name="dob" onChange={(e)=>setDob(e.target.value)} required/></Col>
                    </Row>
                    <Row>
                    <Col lg={2}><p className="form2__lab">Sex</p></Col>
                        <Col lg={10}><select className="blood__input" name="district" id="district" value={sex} onChange={(e)=>{setSex(e.target.value)}}>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                        </select></Col>
                    </Row>
                    <Row>
                        <Col lg={2}><p className="form2__lab">District</p></Col>
                        <Col lg={10}>
                        <select className="blood__input" name="district" id="district" value={district} onChange={(e)=>{setDistrict(e.target.value)}} required>
                        <option value="">Select district</option>
                        <option value="Alappuzha">Alappuzha</option>
                        <option value="Ernakulam">Ernakulam</option>
                        <option value="Idukki">Idukki</option>
                        <option value="Kannur">Kannur</option>
                        <option value="Kasaragod">Kasaragod</option>
                        <option value="Kollam">Kollam</option>
                        <option value="Kottayam">Kottayam</option>
                        <option value="Kozhikode">Kozhikode</option>
                        <option value="Malappuram">Malappuram</option>
                        <option value="Palakkad">Palakkad</option>
                        <option value="Pathanamthitta">Pathanamthitta</option>
                        <option value="Thiruvanthapuram">Thiruvananthapuram</option>
                        <option value="Thrissur">Thrissur</option>
                        <option value="Wayanad">Wayanad</option>
                        </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={2}><p className="form2__lab">Phone Number</p></Col>
                        <Col lg={10}><input className="blood__input" type="tel" name="phone" pattern="[0-9]{10}" value={phone} onChange={(e)=>{setPhone(e.target.value)}} required/></Col>
                    </Row>
                        <input className="blood__check" type="checkbox" id="agree" name="agree" value="Yes" style={{marginBottom:'0'}} onChange={(e)=>{setConfirm("Yes")}}required/>
                        <label for="agree" className="form2__lab"> I hereby declare that all the information provided above are correct. I am willing to donate my blood and share my details.</label>
                    
                   
                </Container>
                <button type="submit" className="blood__btn">Submit</button>
                </form>
                </div>
    )
}

export default Blood