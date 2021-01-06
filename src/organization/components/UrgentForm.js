import React from 'react'
import {Modal} from 'react-bootstrap'
function UrgentForm({show,handleClose,description,setDescription,phone,setPhone,uuidv4,urgentneeds,setUrgentneeds}) {


    const eventSubmit = (e) => {
        e.preventDefault();
        setUrgentneeds([{description,phone,id:uuidv4()},...urgentneeds]);
        setDescription("");
        setPhone("");
        
    }

    
    return (
            <Modal show={show} onHide={handleClose} animation={true}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-center">Post Urgent Need</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
            <form className="event__form" onSubmit={(e)=>{eventSubmit(e);handleClose();}}>
            <p className="event__lab">Description</p>
            <textarea className="event__input" rows="6" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
           
            <p className="event__lab">Phone Number </p>
            <input className="event__input" type="tel" name="phone" pattern="[0-9]{10}"  value={phone} onChange={(e)=>{setPhone(e.target.value)}}required/>
            <div className="event__btn">
            <button className="yes" type="submit">Submit</button>
            </div>
            </form>
            </Modal.Body>
            
            </Modal>

    )
}

export default UrgentForm
