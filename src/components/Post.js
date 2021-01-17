import React,{useState,useContext} from 'react';
import './Components.css'
import axios from 'axios'
import {Card} from 'react-bootstrap';
import ConfirmModal from './ConfirmModal'
import {LoginContext} from '../LoginContext'



const Post = ({title,description,district,location,name,id,type,date}) =>{

    const[loginstatus]=useContext(LoginContext)
    
    const[enrolled,setEnrolled]=useState(false);
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () =>{
        setModalShow(true);
    }

    const enrollaction = () =>{
        axios.post(`http://localhost:4000/user/enrolled/${title}/${name}/${id}`,{
            email:loginstatus.userEmail,
            type:type
        }).then(res=>console.log(res))
        setEnrolled(true)
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
            {date?.slice(0,10)}
            </Card.Text>
            <button className="enroll" style={{display:enrolled?"none":"block"}} onClick={handleClick}>Enroll</button>
            <p style={{color:"green",marginLeft:'85%',display:enrolled?"block":"none",fontSize:"larger",paddingLeft:"0.8em",fontWeight:"bolder"
            }}>Enrolled</p>
            </Card.Body>
            </Card>
            <ConfirmModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            enroll={()=>{enrollaction()}}
            heading="Confirmation"
            text={`You will be enrolled to the activity ${title}. Do you want to continue??`}
            />
            </>
    )

}
export default Post;
