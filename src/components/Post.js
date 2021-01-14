import React,{useState} from 'react';
import './Components.css'
import {Card} from 'react-bootstrap';
import ConfirmModal from './ConfirmModal'




const Post = ({title,description,district,location,name}) =>{

    const[enrolled,setEnrolled]=useState(false);
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () =>{
        setModalShow(true);
    }

    return(
        <>
            <Card style={{ 
            maxWidth:"50rem",
            borderRadius: "15px",
            marginBottom: '2em',
            boxShadow: "5px 5px gray",
            marginLeft:'auto',
            marginRight:'auto'}}>

            <Card.Body>
            <Card.Title style={{color:"#981041"}}>{title}</Card.Title>
            <Card.Text>
            <br/>
            {description}
            </Card.Text>
            <Card.Text>
            {name}
            </Card.Text>
            <Card.Text>
            Location: {location},{district}
            </Card.Text>
            <Card.Text>
            22/02/2020
            </Card.Text>
            <button className="enroll" style={{display:enrolled?"none":"block"}} onClick={handleClick}>Enroll</button>
            <p style={{color:"green",marginLeft:'85%',display:enrolled?"block":"none",fontSize:"larger",paddingLeft:"0.8em",fontWeight:"bolder"
            }}>Enrolled</p>
            </Card.Body>
            </Card>
            <ConfirmModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            enroll={()=>setEnrolled(true)}
            heading="Confirmation"
            text={`You will be enrolled to the activity ${title}. Do you want to continue??`}
            />
            </>
    )

}
export default Post;
