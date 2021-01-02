import React,{useState} from 'react';
import './Components.css'
import {Card,Button} from 'react-bootstrap';
const Post = () =>{

    const[enrolled,setEnrolled]=useState(false);



    const handleClick = () =>{
        setEnrolled(true);
    }

    return(
            <Card style={{ 
            maxWidth: '60%', 
            minHeight:'20rem', 
            borderRadius:"15px",
            marginBottom:'2em',
            boxShadow:"5px 5px gray"}}>

            <Card.Body>
            <Card.Title style={{color:"#981041"}}>Lorem ipsum</Card.Title>
            <Card.Text>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate, turpis nec dictum viverra, neque urna rutrum lacus, vitae faucibus urna dolor ac risus. Mauris at blandit sem. In hac habitasse platea dictumst. Morbi eu cursus massa. Proin vehicula consequat ultrices. Nullam consectetur efficitur lacus sed commodo. Vivamus felis dolor, sodales vel nunc sit amet, accumsan luctus odio. 
            </Card.Text>
            <Card.Text>
            Rotary Club Kannur
            </Card.Text>
            <Card.Text>
            Location: Kannur
            </Card.Text>
            <Card.Text>
            22/02/2020
            </Card.Text>
            <button className="enroll" style={{display:enrolled?"none":"block"}} onClick={handleClick}>{enrolled?"Enrolled":"Enroll"}</button>
            <p style={{color:"green",marginLeft:'85%',display:enrolled?"block":"none",fontSize:"larger",paddingLeft:"0.8em",fontWeight:"bolder"
            }}>Enrolled</p>
            </Card.Body>
            </Card>
    )

}
export default Post;
