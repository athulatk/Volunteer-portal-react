import React, { useState } from 'react'
import { Button, Accordion, Card, Container } from 'react-bootstrap'
import Postorg from './Postorg'
function Postvieworg() {

    const [events, setEvents] = useState([]);



    return (
        <div className="postview">
            <div className="search__div">
                <form className="search__form">
                    <input className="search__input" type="text" placeholder="Keyword" />
                    <input className="search__input" type="text" placeholder="Location" />
                    <button className="search__button" type="submit">Search</button>
                </form>
            </div>
<Container>
<Accordion className="mt-5">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Card.Header} variant="success" eventKey="0">
        <h6>Add Event</h6>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</Container>
            <div className="posts" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: '5%'
            }}>
                
                <Postorg />
                <Postorg />
                <Postorg />
            </div>
        </div>



    )
}

export default Postvieworg
