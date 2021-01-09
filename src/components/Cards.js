import React from 'react'
import {Card} from 'react-bootstrap' 

function Cards() {
    return (
        <div className="cards">
            <Card  className="card-sp2" style={{ width: '25rem', height:'20rem', borderRadius:"15px",boxShadow:"5px 5px 0px 0px rgba(248, 138, 138, 0.74)" }}>
            <Card.Body>
            <Card.Title style={{color:"#981041"}}>DO IT TO EXPERIENCE IT</Card.Title>
            <Card.Subtitle>Rajiv Kumar M</Card.Subtitle>
            <Card.Text>
            <br/>
            Sometimes it’s all about how you
            can change someone’s life. The 
            complete transformation that happens
            in that person’s life because of your 
            little efforts is a feeling.
            It gives you inner happiness and joy which cannot be expressed.
            </Card.Text>
            </Card.Body>
            </Card>

            <Card  className="card-sp2" style={{ width: '25rem', height:'20rem', borderRadius:"15px",boxShadow:"5px 5px 0px 0px rgba(248, 138, 138, 0.74)" }}>
            <Card.Body>
            <Card.Title style={{color:"#981041"}}>WHAT VOLUNTEERING TAUGHT ME </Card.Title>
            <Card.Subtitle>Ravi Kumar</Card.Subtitle>
            <Card.Text>
            <br/>
            We, being the volunteers, did our tasks to motivate the tiny tots to study harder and never give up. One of the volunteer taught them about self cleanliness 
            and hygiene and the other one made them laugh harder with fun and games.
            </Card.Text>
            </Card.Body>
            </Card>

            <Card  className="card-sp2" style={{ width: '25rem', height:'20rem', borderRadius:"15px",boxShadow:"5px 5px 0px 0px rgba(248, 138, 138, 0.74)" }}>
            <Card.Body>
            <Card.Title style={{color:"#981041"}}>THE JOY OF VOLUNTEERING</Card.Title>
            <Card.Subtitle>Amit Lal</Card.Subtitle>
            <Card.Text>
            <br/>
            The definition of volunteering can be summed up in one line – using your skills to impact the social sector. The 
            complete transformation that happens
            in that person’s life because of your 
            little efforts is a feeling.
            </Card.Text>
            </Card.Body>
            </Card>


        </div>
    )
}

export default Cards
