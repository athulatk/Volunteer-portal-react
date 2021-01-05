import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Postorg from './Postorg'
import './EventForm.css'
function Postvieworg() {

    const [events, setEvents] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[district,setDistrict]=useState("Alappuzha");
    const[location,setLocation]=useState("");
    const[date,setDate]=useState("");


    const eventSubmit = (e) => {
        e.preventDefault();
        setEvents(events=>[...events,{title,description,district,location,date}]);
        
    }


    return (
        <div className="postview">
            <div className="search__div">
                <form className="search__form">
                    <input className="search__input" type="text" placeholder="Keyword" />
                    <input className="search__input" type="text" placeholder="Location" />
                    <button className="search__button" type="submit">Search</button>
                </form>
            </div>

            <div className="posts" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: '3%',
                backgroundColor:'green'
            }}>
            <button className="yes mb-5" onClick={handleShow}>Add Event</button>
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
            <input className="event__input" type="text" name="name" value={title} onChange={(e)=>{setTitle(e.target.value)}}required/>
            <p className="event__lab">Description</p>
            <textarea className="event__input" rows="6" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            <p className="event__lab">District</p>
            <select className="event__input" name="district" id="district2" value={district} onChange={(e)=>setDistrict(e.target.value)} required>
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
            <input className="event__input" type="text" name="location"  value={location} onChange={(e)=>{setLocation(e.target.value)}}required/>
            <p className="event__lab">Date </p>
            <input className="event__input" type="date" name="date" value={date} onChange={(e)=>{setDate(e.target.value)}}required/>
            <div className="event__btn">
            <button className="yes" type="submit">Add</button>
            </div>
            </form>
            </Modal.Body>
            
                </Modal>
            {
                events.map(event1=>{
                    return(
                        <Postorg title={title} description={description} district={district} location={location} date={date}/>
                    )
                })
            }
                
            </div>
        </div>



    )
}

export default Postvieworg
