import React from 'react'
import {Card} from 'react-bootstrap'
import CallIcon from '@material-ui/icons/Call';
function UrgentNeed({description,phone}) {
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
        <br/>
        <a href="tel:8606894094" style={{textDecoration:'none',color:'black'}}><CallIcon/>{phone}</a>
        </Card.Body>

        </Card>
        </div>
    )
}

export default UrgentNeed
