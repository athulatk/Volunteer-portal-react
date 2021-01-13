import React from 'react'
import {useState} from 'react';
import Navbar2 from './components/Navbar2'
import Navbar3 from './components/Navbar3'
import {Row,Col,Container} from 'react-bootstrap'
import './Profileupdate.css'
function Profileupdate() {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [dob,setDob] = useState("");
    const [institution,setInstitution] = useState("");
    const [district,setDistrict] = useState("");
    const [phone,setPhone] = useState("");
    const [pic,setPic] = useState("");
    return (
        <div>
            <Navbar3/>
            <Navbar2/>
            <div className="update__profile">
                <div className="update__profile_head">
                    <img className="profile_content update__profile__image" src="data:image/jpeg;base64,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" alt="profile" width="100px" height="100px"/>
                    <div className="profile_content update__profile__name">
                        <h3>Steve Rogers</h3>
                        <h6>Volunteer</h6>
                    </div>
                </div>
                <form className="update__form">
                <Container>
                    <Row>
                        <Col lg={2} ><p className="form2__lab">Name</p></Col>
                        <Col lg={10}><input className="update__input" type="text" value={name} name="name" onChange={(e)=>{setName(e.target.value)}}/></Col>
                    </Row>
                    <Row>
                        <Col lg={2}><p className="form2__lab">Email </p></Col>
                        <Col lg={10}><input className="update__input" type="email" name="email" value={email} disabled/></Col>
                    </Row>
                    <Row>
                        <Col lg={2}><p className="form2__lab">DOB</p></Col>
                        <Col lg={10}><input className="update__input" type="date" value={dob}  onChange={(e)=>setDob(e.target.value)} name="dob"/></Col>
                    </Row>
                    <Row>
                        <Col lg={2}><p className="form2__lab">Institution</p></Col>
                        <Col lg={10}><input className="update__input" type="text" value={institution} onChange={(e)=>{setInstitution(e.target.value)}}name="institution"/></Col>
                    </Row>
                    <Row>
                        <Col lg={2}><p className="form2__lab">District</p></Col>
                        <Col lg={10}>
                        <select className="update__input" name="district" id="district" value={district} onChange={(e)=>{setDistrict(e.target.value)}}>
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
                        <Col lg={10}><input className="update__input" type="tel" name="phone" pattern="[0-9]{10}" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/></Col>
                    </Row>
                    <Row>
                        <Col lg={2}><p className="form2__lab">Profile Picture</p></Col>
                        <Col lg={10}><input className="update__input" type="text" placeholder="Image URL" value={pic} onChange={(e)=>{setPic(e.target.value)}} name="pic"/></Col>
                    </Row>
                </Container>
                <button type="submit" className="save_btn">Save Changes</button>
                </form>
                
                

        </div>
        </div>
    )
}

export default Profileupdate
