import React,{useState} from 'react'
import './Activitycard.css'
import CertificateModal from './CertificateModal'



function Activitycard() {

    const [modalShow, setModalShow] = useState(false);

    const showModal = () =>{
        setModalShow(true);
    }
    return (
        <div className="activity">
            <div className="activity__details">
                <p>H20 Volunteer</p>
                <p>Kannur</p>
            </div>
            <p className="status">Ongoing</p>
            <button className="claim_btn" onClick={showModal}>
                Claim Certificate
            </button>
            <CertificateModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />

        </div>
    )
}

export default Activitycard
