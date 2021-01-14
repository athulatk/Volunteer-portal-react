import React from 'react'
import VolunteerCard from './components/VolunteerCard'
import Navbar2 from '../components/Navbar2'
import Navbar4 from '../components/Navbar4'
function VolunteerView({match}) {
    console.log(match);
    return (
        <div>
        <Navbar4/>
        <Navbar2/>
        <div className="volunteer-view">
        <h3 className="main_head">{match.params.eventid}</h3>
        <h4 className="main_head">Applied Volunteers List</h4>
        <div className="application_status">
        <p>Total Volunteers Applied:16</p>
        <p>Confirmed Volunteers:2</p>
        </div>
        <div className="volunteers">
        <VolunteerCard/>
        </div>
        </div>
        </div>
    )
}
export default VolunteerView