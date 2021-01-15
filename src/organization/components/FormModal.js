import React, { useContext } from 'react'
import axios from 'axios'
import {Modal} from 'react-bootstrap'
import { LoginContext } from '../../LoginContext'

function FormModal({title,description,district,location,date,show,handleClose,setTitle,setDescription,
    events,setEvents,setDistrict,setLocation,setDate,type}) {

    const[loginstatus]=useContext(LoginContext);

    const eventSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4000/ngo/${type}`,{
            name:loginstatus.name,
            title:title,
            desc:description,
            dist:district,
            loc:location,
            date:date
        }).then(()=>{
            alert("insert successfull")
        })

        setEvents([{title,description,district,location,date},...events]);
        setTitle("");
        setDescription("");
        setDistrict("");
        setLocation("");
        setDate("");
        
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-center">Add Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
            <form className="event__form" onSubmit={(e)=>{eventSubmit(e);handleClose();}}>
            <p className="event__lab">Title</p>
            <input className="event__input" placeholder="Provide a title" type="text" name="name" value={title} onChange={(e)=>{setTitle(e.target.value)}}required/>
            <p className="event__lab">Description</p>
            <textarea className="event__input" rows="6" value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Describe the activity and requirements.."/>
            <p className="event__lab">District</p>
            <select className="event__input" name="district" id="district2" value={district} onChange={(e)=>setDistrict(e.target.value)} required>
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
            <p className="event__lab">Location </p>
            <input className="event__input" type="text" name="location"  placeholder="Address" value={location} onChange={(e)=>{setLocation(e.target.value)}}required/>
            <p className="event__lab">Date </p>
            <input className="event__input" type="date" name="date" value={date} onChange={(e)=>{setDate(e.target.value)}} required/>
            <div className="event__btn">
            <button className="yes" type="submit">Submit</button>
            </div>
            </form>
            </Modal.Body>
            
                </Modal>
    )
}

export default FormModal



