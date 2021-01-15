import React,{useState} from 'react'
import './Activitycard.css'
import CertificateModal from './CertificateModal'



function Activitycard({title,org,status}) {

    const [modalShow, setModalShow] = useState(false);

    const showModal = () =>{
        setModalShow(true);
    }
    return (
        <div className="activity">
            <div className="activity__details">
                <p>{title}</p>
                <p>{org}</p>
            </div>
            <p className="status">{status?"Approved":"Pending"}</p>
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
