import React from 'react'
import {Modal} from 'react-bootstrap'
function ConfirmModal(props) {
    return (
    
            <Modal show={props.show} onHide={props.onHide} animation={true} size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Claim Your Volunteering Certificate
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                    <label className="event__lab" for="code">Enter Code:</label>
                    <input className="event__input" type="text"/>
                    <div>
                    <button className="yes" type="submit" variant="success" style={{margin:'auto',marginTop:'30px'}}>Claim</button>
                    </div>
                    
                </form>
              </Modal.Body>
            </Modal>
            )
     
}

export default ConfirmModal
