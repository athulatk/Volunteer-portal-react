import React from 'react'
import './Components.css'
import UrgentNeed from './UrgentNeed'
function Urgentneeds() {
    return (
        <div className="urgent_board">
            <h2 className="urgent_heading">Urgent Needs</h2>
        <div className="urgent_cards">
        <UrgentNeed/>
        <UrgentNeed/>
        <UrgentNeed/>
        </div>
        </div>
    )
}

export default Urgentneeds
