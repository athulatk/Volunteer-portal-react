import React from 'react'
import {useState,useEffect} from 'react'
import './Components.css'
import axios from 'axios'
import SearchIcon from '@material-ui/icons/Search';
import UrgentNeed from './UrgentNeed'
function Urgentneeds() {

    const[uneeds,setUneeds]=useState([]);

    useEffect(() => {
        axios.get('link')
        .then(response=>setUneeds(response.data))
        
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
        
        <UrgentNeed/>
        {
            uneeds.map(uneed=>{
                return(
                    <UrgentNeed/>
                )
            })
        }
        </div>
        </div>
    )
}

export default Urgentneeds
