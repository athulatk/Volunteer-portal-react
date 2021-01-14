import React, { useState,useEffect } from 'react'
import FormModal from './FormModal'
import Postorg from './Postorg'
import './EventForm.css'
import AddBoxIcon from '@material-ui/icons/AddBox';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
function Postvieworg({type,url}) {

    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[district,setDistrict]=useState("");
    const[location,setLocation]=useState("");
    const[date,setDate]=useState("");

    const [events, setEvents] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    useEffect(() => {
        axios.get("http://localhost:3001/auth/Signup",{
            type:type
        })
        .then(response=>{setEvents(response.data)})
        
    }, [])

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
            <button className="yes mb-5 ml-auto mr-auto" onClick={handleShow}><AddBoxIcon style={{marginBottom:'4.5px'}}/> Add Event</button>
            <FormModal uuidv4={uuidv4} title={title} description={description} district={district} location={location} date={date} 
            setTitle={setTitle} setDescription={setDescription} setDistrict={setDistrict} setLocation={setLocation} setDate={setDate}
            events={events} setEvents={setEvents}
            show={show} handleClose={handleClose}/>
            <ul>
            {
                events.map(event1=>{
                    return(
                        <Postorg key={event1.id} event1={event1} title={event1.title} description={event1.description} 
                        district={event1.district} location={event1.location}
                        date={event1.date} events={events} setEvents={setEvents} type={type} url={url}/>
                    )
                })
            }
            </ul>
                
            </div>
        </div>



    )
}

export default Postvieworg
