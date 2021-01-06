import React from 'react'
import '../../components/Components.css'
import AddBoxIcon from '@material-ui/icons/AddBox';
import Urgentorg from './Urgentorg'
function Urgentsorg() {
    return (
        <div className="urgent_board">
            <h2 className="urgent_heading">Urgent Needs</h2>
            <button className="addurgent mb-5 ml-auto mr-auto"><AddBoxIcon style={{marginBottom:'4.5px'}}/> Post</button>
        <div className="urgent_cards">
        <Urgentorg/>
        <Urgentorg/>
        <Urgentorg/>
        </div>
        </div>
    )
}

export default Urgentsorg