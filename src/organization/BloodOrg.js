import React, { useEffect,useState } from 'react'
import { Table,Container } from 'react-bootstrap'
import Navbar4 from '../components/Navbar4'
import Navbar2 from '../components/Navbar2'
import axios from 'axios'

function BloodOrg() {


  const[bloods,setBloods]=useState([]);

  const[bloodgrp,setBloodgrp]=useState('');

  const getGroup = (e) =>{
      e.preventDefault();
      axios.get('http://localhost:4000/ngo/event/blood',{
        params:{
          bg:bloodgrp
        }
      })
      .then(res=>{
        console.log(res)
        setBloods(res.data)
      })
  }



    return (
        <div>
        <Navbar4/>
        <Navbar2/>
        <div className="blood-display">

        <form onSubmit={getGroup} style={{display:'block',paddingLeft:'5em',margin:'auto',width:'50%',
         marginTop:'5%',marginBottom:'3%'}}>
        <select name="blood__group" className="blood__input" id="blood_grp" value={bloodgrp} onChange={(e)=>setBloodgrp(e.target.value)}>
                        <option value="">Select a blood group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option> 
                        <option value="B+">B+</option> 
                        <option value="B-">B-</option> 
                        <option value="O+">O+</option> 
                        <option value="O-">O-</option> 
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>  
                        </select>
          <button className="nav__btn" type="submit">Search</button>

        </form>

        <Table striped bordered hover>
        <thead>
        <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>District</th>
            <th>Sex</th>
            <th>DOB</th>
        </tr>
        </thead>
        <tbody>
        {
          bloods.map(blood=>{
            return(
              <tr>
                <td>{blood.name}</td>
                <td>{blood.ph}</td>
                <td>{blood.district}</td>
                <td>{blood.sex}</td>
                <td>{blood.dob.slice(0,10)}</td>
              </tr>
            )
          })
        }
  </tbody>
</Table>
        </div>
        
        </div>
    )
}

export default BloodOrg
