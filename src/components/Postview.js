import React from 'react'
import './Components.css'
import {Card,Button} from 'react-bootstrap'
function Postview() {
    return (
        <div className="postview">
            <div className="search__div">
            <form className="search__form">
            <input className="search__input" type="text" placeholder="Keyword"/>
            <input className="search__input" type="text" placeholder="Location"/>
            <button className="search__button" type="submit">Search</button>
        </form>
        </div>


        <div className="posts">
        <Card 
            style={{ 
                maxWidth: '60%', 
                minHeight:'20rem', 
                borderRadius:"15px",
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
            <button className="enroll">Enroll</button>
            </Card.Body>
            </Card>



        </div>

            

        </div>


        
    )
}

export default Postview
