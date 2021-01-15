import React,{useState,useEffect, useContext} from 'react'
import Navbar2 from './components/Navbar2'
import Navbar3 from './components/Navbar3'
import './Profile.css'
import axios from 'axios'
import Activitycard from './components/Activitycard'
import {Link} from 'react-router-dom'
import { LoginContext } from './LoginContext'
function Profile() {

    const[loginstatus]=useContext(LoginContext)
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[pic,setPic]=useState('');
    const[activities,setActivities]=useState([]);

    useEffect(() => {
            if(loginstatus?.userEmail){
                axios.get("http://localhost:4000/up/profile",{
            params:{
                email:loginstatus?.userEmail
            },
            withCredentials:true
        })
        .then(response=>{
            console.log(response)
            setName(response.data[0].name)
            setEmail(response.data[0].email)
            setPic(response.data[0].imageu)

        })

        axios.get("http://localhost:4000/user/enrolled",{
            params:{
                email:loginstatus?.userEmail
            },
            withCredentials:true
        })
        .then(res=>{
            console.log(res)
            setActivities(res.data)
        })


            }    
        
    }, [loginstatus])

    return (
        <div>
            <Navbar3/>
            <Navbar2/>
        <div className="profile">
            <div className="profile_head">
                <img className="profile_content profile__image" src={pic?pic:"https://image.flaticon.com/icons/png/512/17/17004.png"} alt="profile" width="200px" height="200px"/>
                <div className="profile_content profile__name">
                    <h3>{name}</h3>
                    <h6>{email}</h6>
                    <Link to="/profile/update"><button className="update__profile__btn">View/Update Profile</button></Link>
                </div>
            </div>
            <div>
            <h3 className="enrolled">Enrolled Activities</h3>
            {
                activities.map(activity=>{
                    return(
                        <Activitycard title={activity.title} org={activity.ngoname} status={activity.status}/>
                    )
                    
                })
            }
            
            </div> 
        </div>
        </div>
        
    )
}

export default Profile
