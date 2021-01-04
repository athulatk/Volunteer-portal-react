import React,{useState} from 'react';
import './Components.css'
import {Card,Button,Modal} from 'react-bootstrap';

function Modal1(props) {
    return (
        <Modal show={props.show} onHide={props.onHide} animation={true} size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirmation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Confirmation</h4>
        <p>
          Do you want to continue?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button className="no" onClick={props.onHide}>No</button>
        <button className="yes" variant="success" onClick={()=>{props.enroll(); props.onHide();}}>Yes</button>
      </Modal.Footer>
    </Modal>
    )
}

const Post = () =>{

    const[enrolled,setEnrolled]=useState(false);
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () =>{
        setModalShow(true);
    }

    return(
        <>
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
            <button className="enroll" style={{display:enrolled?"none":"block"}} onClick={handleClick}>Enroll</button>
            <p style={{color:"green",marginLeft:'85%',display:enrolled?"block":"none",fontSize:"larger",paddingLeft:"0.8em",fontWeight:"bolder"
            }}>Enrolled</p>
            </Card.Body>
            </Card>
            <Modal1
            show={modalShow}
            onHide={() => setModalShow(false)}
            enroll={()=>setEnrolled(true)}
            />
            </>
    )

}
export default Post;
