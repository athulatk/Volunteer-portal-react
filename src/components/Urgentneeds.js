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
    console.log(loginstatus.userEmail)
    const[query,setQuery]=useState('');

    useEffect(() => {
        if(loginstatus.userEmail){
            axios.get("http://localhost:4000/user/uneeds",{
            params:{
                email:loginstatus.userEmail
            }
        })
        .then(response=>{
            console.log(response.data)
            setUneeds(response.data)
        })

        }
        
        
        
    }, [])

    const searchUrgent = (e) =>{
        e.preventDefault();
        axios.get('http://localhost:4000/user/uneedsearch',{
            params:{
                term:query
            }
        }).then(res=>console.log(res))

    }

    return (
        <div className="urgent_board">
            <h2 className="urgent_heading">Urgent Needs</h2>
        <div className="text-center">
        <form onSubmit={searchUrgent}>
        <input type="text" value={query} placeholder="Search urgent needs.."className="urgent_searchbar" onChange={(e)=>{setQuery(e.target.value)}}/>
        <button type="submit" className="search_button2"><SearchIcon/></button>
        </form>
        </div>
        <div className="urgent_cards">
        
        {
            uneeds.map(uneed=>{
                return(
                    <UrgentNeed id={uneed.id} description={uneed.description} phone={uneed.ph} key={uneed.id}/>
                )
            })
        }
        </div>
        </div>
    )
}

export default Urgentneeds
