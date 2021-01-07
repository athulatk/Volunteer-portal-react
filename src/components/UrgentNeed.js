import React from 'react'
import {Card} from 'react-bootstrap'
import CallIcon from '@material-ui/icons/Call';
function UrgentNeed() {
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
        Important requirement at lorem ipsum dolor set amet alkfjlkajfa flskdjf alkfdj l aldkfj lakjlkjlkjlkjlkadf lkaf alkdfjlakfjlaf  lkjfdlkajfl af lajfsldkjflajf
        <br/>
        <br/>
        <a href="tel:8606894094" style={{textDecoration:'none',color:'black'}}><CallIcon/> 8606894094</a>
        </Card.Body>

        </Card>
        </div>
    )
}

export default UrgentNeed
