import axios from 'axios'
import React,{useState} from 'react'
import { Card } from 'react-bootstrap'
import './VolunteerCard.css'
function VolunteerCard({fname,dob,email,phone,district,id}) {


    const[confirmed,setConfirmed]=useState(false)

    const confirmVolunteer = () =>{
        axios.put(`http://localhost:4000/ngo/enrolled/${email}/${id}`)
        .then(res=>console.log(res))
        setConfirmed(true);
    }


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
            <Card.Title style={{ color: "#981041" }}>{fname}</Card.Title>
            <Card.Text className="enrolled_details">
            <div>
            <p className="enrolled_label">DOB</p>
            <p className="enrolled_value">1999-04-21</p>
            </div>
            <div>
            <p className="enrolled_label">Email</p>
            <p className="enrolled_value">{email}</p>
            </div>
            <div>
            <p className="enrolled_label">Phone Number</p>
            <p className="enrolled_value">{phone}</p>
            </div>
            <div>
            <p className="enrolled_label">Place of Residence</p>
            <p className="enrolled_value">{district}</p>
            </div> 
            </Card.Text>
            <div style={{width:'100%'}}>
                    <button className="yes" style={{display:confirmed?'none':'block',marginLeft:'auto'}} onClick={confirmVolunteer}>Confirm</button>
                    <p style={{color:'green',fontSize:'larger',fontWeight:'bolder',position:'absolute',bottom:'5px',right:'50px',display:confirmed?"block":"none"}}>Confirmed</p>
            </div>
            </Card.Body>
        </Card>
    )
}

export default VolunteerCard
