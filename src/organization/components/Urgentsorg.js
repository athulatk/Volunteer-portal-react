import React,{useContext, useState,useEffect} from 'react'
import '../../components/Components.css'
import AddBoxIcon from '@material-ui/icons/AddBox';
import Urgentorg from './Urgentorg'
import UrgentForm from './UrgentForm'
import axios from 'axios';
import { LoginContext } from '../../LoginContext';
function Urgentsorg() {
    const [urgentneeds,setUrgentneeds]=useState([])
    const [description,setDescription]=useState("");
    const [ph,setPh]=useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[loginstatus]=useContext(LoginContext)


    useEffect(() => {
        if(loginstatus?.name){
            axios.get('http://localhost:4000/ngo/ug/urgent',{
            params:{
                name:loginstatus.name
            },
            withCredentials:true
        })
        .then(response=>{
            console.log(response)
            setUrgentneeds(response.data)
        })
        }
        
        
        
    }, [loginstatus])

   
    
    return (
        <div className="urgent_board">
            <h2 className="urgent_heading">Urgent Needs</h2>
            <button className="addurgent mb-5 ml-auto mr-auto" onClick={handleShow}><AddBoxIcon style={{marginBottom:'4.5px'}}/> Post</button>
            <UrgentForm urgentneeds={urgentneeds}
            setUrgentneeds={setUrgentneeds} description={description} setDescription={setDescription} 
            ph={ph} setPh={setPh} show={show} handleClose={handleClose}/>

        <div className="urgent_cards">
        <ul>
        {
            urgentneeds.map(urgent=>(
                <Urgentorg key={urgent.id} id={urgent.id} description={urgent.description} ph={urgent.ph} urgent={urgent} urgentneeds={urgentneeds}
                setUrgentneeds={setUrgentneeds}/>
            ))
        }
        </ul>
        </div>
        </div>
    )
}

export default Urgentsorg