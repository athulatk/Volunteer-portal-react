import React, { useContext } from 'react'
import {useState,useEffect} from 'react'
import './Components.css'
import axios from 'axios'
import SearchIcon from '@material-ui/icons/Search';
import UrgentNeed from './UrgentNeed'
import { LoginContext } from '../LoginContext';
function Urgentneeds() {

    const[uneeds,setUneeds]=useState([]);
    const[loginstatus]=useContext(LoginContext)
    console.log(loginstatus.email)

    useEffect(() => {
        axios.get("http://localhost:4000/user/uneeds",{
            email:loginstatus.email
        })
        .then(response=>{
            console.log(response.data)
            setUneeds(response.data)
        })
        
        
    }, [])

    return (
        <div className="urgent_board">
            <h2 className="urgent_heading">Urgent Needs</h2>
        <div className="text-center">
        <form>
        <input type="text" placeholder="Search urgent needs.."className="urgent_searchbar"/>
        <button type="submit" className="search_button2"><SearchIcon/></button>
        </form>
        </div>
        <div className="urgent_cards">
        
        {
            uneeds.map(uneed=>{
                return(
                    <UrgentNeed description={uneed.description} phone={uneed.ph} key={uneed.id}/>
                )
            })
        }
        </div>
        </div>
    )
}

export default Urgentneeds
