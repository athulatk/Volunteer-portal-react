import React,{useState} from 'react'
import {Card} from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
import {Tooltip,OverlayTrigger} from 'react-bootstrap'

const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Delete
    </Tooltip>
)

function Urgentorg({description,phone,urgentneeds,setUrgentneeds,urgent}) {

    

    const deleteNeed = () =>{
        setUrgentneeds(urgentneeds.filter(el=>el.id!==urgent.id))
    }

    return (
        <div>
            <Card 
            style={{ 
            maxWidth: '28rem',
            maxHeight:'20rem',
            margin:"2% 2% 2% 2%",
            backgroundColor:"white",
            borderRadius:"30px",
            boxShadow:"black"}}>

        <Card.Body>
        {description}
        <br/>
            <a href={`tel:${phone}`}>Call us at {phone}</a>
            <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
            >
            <DeleteIcon className="delete-icon" onClick={deleteNeed}/>
            </OverlayTrigger>
        </Card.Body> 

        </Card>
        </div>
    )
}

export default Urgentorg