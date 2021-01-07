import React from 'react'
import './Components.css'
import SearchIcon from '@material-ui/icons/Search';
import UrgentNeed from './UrgentNeed'
function Urgentneeds() {
    return (
        <div className="urgent_board">
            <h2 className="urgent_heading">Urgent Needs</h2>
        <div className="text-center">
        <input type="text" placeholder="Search urgent needs.."className="urgent_searchbar"/>
        <button className="search_button2"><SearchIcon/></button>
        </div>
        <div className="urgent_cards">
        
        <UrgentNeed/>
        <UrgentNeed/>
        <UrgentNeed/>
        </div>
        </div>
    )
}

export default Urgentneeds
