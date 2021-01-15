import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
import './Postorg.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ConfirmModal2 from './ConfirmModal2'
import DeleteIcon from '@material-ui/icons/Delete';

//Give id

const Postorg = ({title,description,district,location,date,events,setEvents,event1,type,url,id}) => {

    const [modalShow, setModalShow] = useState(false);

    const deleteModal = () =>{
        setModalShow(true)   
    }

    const deleteEvent = () =>{
        axios.delete(`http://localhost:4000/ngo/${type}/${id}`)
        .then(res=>console.log(res))
        setEvents(events.filter(el=>el.id!==event1.id))
    }

    return (
        <>
        <Card style={{
            maxWidth:"50rem",
            borderRadius: "15px",
            marginBottom: '2em',
            boxShadow: "5px 5px gray",
            marginLeft:'auto',
            marginRight:'auto'
        }}>

            <Card.Body>
            <Card.Title style={{ color: "#981041" }}>{title}</Card.Title>
                <Card.Text>
                    <br />
            {description}
            </Card.Text>
                <Card.Text>
                    Location: {location}, {district}
            </Card.Text>
                <Card.Text>
                {date}
            </Card.Text>
                <div className="card_footer">
                    <button className="delete_button" onClick={deleteModal}><DeleteIcon style={{fontSize:'large',marginBottom:'4.5px'}}/> Delete Event</button>
                    <Link to={`${url}/${id}`}><button className="view_button">View Enrolled Volunteers</button></Link>
                </div>
            </Card.Body>
        </Card>
        <ConfirmModal2
        show={modalShow}
        onHide={() => setModalShow(false)}
        heading="Confirmation"
        text={`Are you sure you want to delete the event ${title}?`}
        deleteEvent={deleteEvent}
        />
        </>
    )

}
export default Postorg;
