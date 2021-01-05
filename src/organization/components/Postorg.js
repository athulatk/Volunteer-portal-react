import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Postorg.css'

//Give id

const Postorg = ({title,description,district,location,date}) => {

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
                    <button className="delete_button">Delete Event</button>
                    <button className="view_button">View Enrolled Volunteers</button>
                </div>
            </Card.Body>
        </Card>
    )

}
export default Postorg;
