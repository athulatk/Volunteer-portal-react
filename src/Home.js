import React,{useState,useEffect}from 'react'
import Navbar3 from './components/Navbar3'
import Navbar2 from './components/Navbar2'
import Categories from './components/Categories'
import {LoginContext} from './LoginContext'
import { Redirect } from 'react-router-dom'
function Home() {
    const [loginstatus,setLoginstatus]=useState(LoginContext);
    useEffect(() => {
        if(!loginstatus.logged){
            return <Redirect to="/"/>   
        }
    }, [])
    
             
    return (
        <div>
            <Navbar3/>
            <Navbar2/>
            <h3 style={{textAlign:"center",color:"#981041",marginTop:"2%"}}>Volunteer Here!</h3>
            <Categories/>
        </div>
    )
}

export default Home
