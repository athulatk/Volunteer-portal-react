import React from 'react'
import Navbar3 from './components/Navbar3'
import Navbar2 from './components/Navbar2'
import {Row,Col,Container} from 'react-bootstrap'
import './Blood.css'

function Blood() {
    return (
        <div>
            <Navbar3/>
            <Navbar2/>
            <h2 className="text-center blood_head">Blood Donation Form</h2>
            <form className="blood__form">
                <Container>
                    <Row>
                        <Col lg={2} ><p className="form2__lab">Name</p></Col>
                        <Col lg={10}><input className="blood__input" type="text" name="name"/></Col>
                    </Row>
                    <Row>
                        <Col lg={2}><p className="form2__lab">Blood Group</p></Col>
                        <Col lg={10}> 
                        <select name="blood__group" className="blood__input" id="blood_grp">
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
                        <Col lg={10}><input className="blood__input" type="date" value="1999-04-21" name="dob"/></Col>
                    </Row>
                    <Row>
                        <Col lg={2}><p className="form2__lab">District</p></Col>
                        <Col lg={10}>
                        <select className="blood__input" name="district" id="district">
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
                        <Col lg={10}><input className="blood__input" type="tel" name="phone" pattern="[0-9]{10}"/></Col>
                    </Row>
                    <input className="blood__check" type="checkbox" id="agree" name="agree" value="Yes"/>
                    <label for="agree"> I am willing to donate my blood and share my details</label>
                   
                </Container>
                <button type="submit" className="blood__btn">Submit</button>
                </form>
                </div>
    )
}

export default Blood