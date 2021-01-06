import React,{useState} from 'react'
import '../../components/Components.css'
import AddBoxIcon from '@material-ui/icons/AddBox';
import Urgentorg from './Urgentorg'
import UrgentForm from './UrgentForm'
import { v4 as uuidv4 } from 'uuid';
function Urgentsorg() {
    const [urgentneeds,setUrgentneeds]=useState([])
    const [description,setDescription]=useState("");
    const [phone,setPhone]=useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="urgent_board">
            <h2 className="urgent_heading">Urgent Needs</h2>
            <button className="addurgent mb-5 ml-auto mr-auto" onClick={handleShow}><AddBoxIcon style={{marginBottom:'4.5px'}}/> Post</button>
            <UrgentForm uuidv4={uuidv4} urgentneeds={urgentneeds}
            setUrgentneeds={setUrgentneeds} description={description} setDescription={setDescription} 
            phone={phone} setPhone={setPhone} show={show} handleClose={handleClose}/>

        <div className="urgent_cards">
        <ul>
        {
            urgentneeds.map(urgent=>(
                <Urgentorg key={urgent.id} description={urgent.description} phone={urgent.phone} urgent={urgent} urgentneeds={urgentneeds}
                setUrgentneeds={setUrgentneeds}/>
            ))
        }
        </ul>
        </div>
        </div>
    )
}

export default Urgentsorg