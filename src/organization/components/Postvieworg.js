import React, { useState } from 'react'
import FormModal from './FormModal'
import Postorg from './Postorg'
import './EventForm.css'
import { isWidthDown } from '@material-ui/core';
function Postvieworg() {

    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[district,setDistrict]=useState("Alappuzha");
    const[location,setLocation]=useState("");
    const[date,setDate]=useState("");

    const [events, setEvents] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    


    return (
        <div className="postview">
            <div className="search__div">
                <form className="search__form">
                    <input className="search__input" type="text" placeholder="Keyword" />
                    <input className="search__input" type="text" placeholder="Location" />
                    <button className="search__button" type="submit">Search</button>
                </form>
            </div>

            
            <div className="posts">
            <button className="yes mb-5 ml-auto mr-auto" onClick={handleShow}>Add Event</button>
            <FormModal title={title} description={description} district={district} location={location} date={date} 
            setTitle={setTitle} setDescription={setDescription} setDistrict={setDistrict} setLocation={setLocation} setDate={setDate}
            events={events} setEvents={setEvents}
            show={show} handleClose={handleClose}/>
            <ul>
            {
                events.map(event1=>{
                    return(
                        <li style={{listStyle:'none'}}><Postorg title={event1.title} description={event1.description} district={event1.district} location={event1.location} date={event1.date}/></li>
                    )
                })
            }
            </ul>
                
            </div>
        </div>



    )
}

export default Postvieworg
