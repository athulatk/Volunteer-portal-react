import React, { useContext,useEffect,useState } from 'react'
import VolunteerCard from './components/VolunteerCard'
import Navbar2 from '../components/Navbar2'
import Navbar4 from '../components/Navbar4'
import axios from 'axios';
import { LoginContext } from '../LoginContext';
function VolunteerView({match}) {
    console.log(match);

    const[volunteers,setVolunteers]=useState([])
    const[loginstatus]=useContext(LoginContext)
    useEffect(() => {
        if(loginstatus?.name){
            axios.get(`http://localhost:4000/ngo/enrolled/${match.params.eventid}`,{
            params:{
                name:loginstatus?.name
            }
        }).then(
            res=>{
                console.log(res);
                setVolunteers(res.data)
                
            }
        )
        }
        
    }, [loginstatus])
    return (
        <div>
        <Navbar4/>
        <Navbar2/>
        <div className="volunteer-view">
        <h3 className="main_head"></h3>
        <h4 className="main_head">Applied Volunteers List</h4>
        <div className="application_status">
        <h5>Total Volunteers Applied: {volunteers.length}</h5>
        <h6>Confirmed Volunteers:2</h6>
        </div>
        <div className="volunteers">
        {
            volunteers.map(volunteer=>{
                return(
                    <VolunteerCard fname={volunteer.name} email={volunteer.email} dob={volunteer.dob} phone={volunteer.ph} district={volunteer.district}/>
                )
            })
        }
        
        </div>
        </div>
        </div>
    )
}
export default VolunteerView