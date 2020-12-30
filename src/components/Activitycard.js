import React from 'react'
import './Activitycard.css'
function Activitycard() {
    return (
        <div className="activity">
            <div className="activity__details">
                <p>H20 Volunteer</p>
                <p>Kannur</p>
            </div>
            <p className="status">Ongoing</p>
            <button className="claim_btn">
                Claim Certificate
            </button>
        </div>
    )
}

export default Activitycard
