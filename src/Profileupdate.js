import React from 'react'
import { useState, useContext, useEffect } from 'react';
import Navbar2 from './components/Navbar2'
import Navbar3 from './components/Navbar3'
import { Row, Col, Container } from 'react-bootstrap'
import './Profileupdate.css'
import axios from 'axios';
import { LoginContext } from './LoginContext'
function Profileupdate() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [institution, setInstitution] = useState("");
    const [district, setDistrict] = useState("");
    const [phone, setPhone] = useState("");
    const [pic, setPic] = useState("");
    const [loginstatus] = useContext(LoginContext)

    useEffect(() => {
        if (loginstatus?.userEmail) {
            axios.get("http://localhost:4000/up/profile", {
                params: {
                    email: loginstatus?.userEmail
                },
                withCredentials: true
            })
                .then(response => {
                    console.log(response)
                    setName(response.data[0].name)
                    setEmail(response.data[0].email)
                    setDob(response.data[0].dob)
                    setInstitution(response.data[0].institution)
                    setDistrict(response.data[0].district)
                    setPhone(response.data[0].ph)
                    setPic(response.data[0].imageu)
                })

        }

    }, [loginstatus])


    const profileSubmit = (e) =>{
        e.preventDefault()
        console.log(institution)

        axios.post('http://localhost:4000/up/update',{
            dob:dob.slice(0,10),
            institute:institution,
            district:district,
            ph:phone,
            image:pic,
            email:email

        }).then(res=>{console.log(res)
            if(res.data.message==="success")
                alert("Profile Update Successful")
        
        })
        console.log(dob.slice(0,10))
        console.log(district)

    }

    return (
        <div>
            <Navbar3 />
            <Navbar2 />
            <div className="update__profile">
                <div className="update__profile_head">
                    <img className="profile_content update__profile__image" src={pic?pic:"https://image.flaticon.com/icons/png/512/17/17004.png"} alt="profile" width="100px" height="100px" />
                    <div className="profile_content update__profile__name">
                        <h3>{name}</h3>
                        <h6>{email}</h6>
                    </div>
                </div>
                <form className="update__form" onSubmit={profileSubmit}>
                    <Container>
                        <Row>
                            <Col lg={2} ><p className="form2__lab">Name</p></Col>
                            <Col lg={10}><input className="update__input" type="text" value={name} name="name" disabled/></Col>
                        </Row>
                        <Row>
                            <Col lg={2}><p className="form2__lab">Email </p></Col>
                            <Col lg={10}><input className="update__input" type="email" name="email" value={email} disabled /></Col>
                        </Row>
                        <Row>
                            <Col lg={2}><p className="form2__lab">DOB</p></Col>
                            <Col lg={10}><input className="update__input" type="date" value={dob} onChange={(e) => setDob(e.target.value)} name="dob" /></Col>
                        </Row>
                        <Row>
                            <Col lg={2}><p className="form2__lab">Institution</p></Col>
                            <Col lg={10}><input className="update__input" type="text" value={institution} onChange={(e) => { setInstitution(e.target.value) }} name="institution" /></Col>
                        </Row>
                        <Row>
                            <Col lg={2}><p className="form2__lab">District</p></Col>
                            <Col lg={10}>
                                <select className="update__input" name="district" id="district" value={district} onChange={(e) => { setDistrict(e.target.value) }}>
                                    <option value="">Select your district</option>
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
                            <Col lg={10}><input className="update__input" type="tel" name="phone" pattern="[0-9]{10}" value={phone} onChange={(e) => { setPhone(e.target.value) }} /></Col>
                        </Row>
                        <Row>
                            <Col lg={2}><p className="form2__lab">Profile Picture</p></Col>
                            <Col lg={10}><input className="update__input" type="text" placeholder="Image URL" value={pic} onChange={(e) => { setPic(e.target.value) }} name="pic" /></Col>
                        </Row>
                    </Container>
                    <button type="submit" className="save_btn">Save Changes</button>
                </form>



            </div>
        </div>
    )
}

export default Profileupdate
