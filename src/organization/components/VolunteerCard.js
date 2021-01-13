import React from 'react'
import { Card } from 'react-bootstrap'
import './VolunteerCard.css'
function VolunteerCard() {
    return (
            <Card style={{
            maxWidth:"50rem",
            borderRadius: "15px",
            marginBottom: '2em',
            boxShadow: "5px 5px gray",
            marginLeft:'auto',
            marginRight:'auto'
        }}>

            <Card.Body>
            <Card.Title style={{ color: "#981041" }}>N Athul Kumar</Card.Title>
            <Card.Text className="enrolled_details">
            <div>
            <p className="enrolled_label">DOB</p>
            <p className="enrolled_value">21/04/1999</p>
            </div>
            <div>
            <p className="enrolled_label">Email</p>
            <p className="enrolled_value">athulnvinod@gmail.com</p>
            </div>
            <div>
            <p className="enrolled_label">Phone Number</p>
            <p className="enrolled_value">8606894094</p>
            </div>
            <div>
            <p className="enrolled_label">Place of Residence</p>
            <p className="enrolled_value">Kannur</p>
            </div> 
            </Card.Text>
            <div style={{width:'100%'}}>
                    <button className="yes" style={{display:'block',marginLeft:'auto'}}>Confirm</button>
            </div>
            </Card.Body>
        </Card>
    )
}

export default VolunteerCard
