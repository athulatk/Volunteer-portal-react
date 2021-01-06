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
                  {props.heading}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>{props.subheading}</h4>
                <p>
                  {props.text}
                </p>
              </Modal.Body>
              <Modal.Footer>
                <button className="no" onClick={props.onHide}>No</button>
                <button className="yes" variant="success" onClick={()=>{props.enroll(); props.onHide();}}>Yes</button>
              </Modal.Footer>
            </Modal>
            )
     
}

export default ConfirmModal
