import React,{useState,useEffect} from 'react'
import './Components.css'
import axios from 'axios'
import Post from './Post'

function Postview() {

    const[keyword,setKeyword]=useState('');
    const[location,setLocation]=useState('');

    const[posts,setPosts]=useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/uneeds')
        .then(response=>setPosts(response.data))
    }, [])

    return (
        <div className="postview">
            <div className="search__div">
            <form className="search__form">
            <input className="search__input" type="text" placeholder="Keyword" value={keyword} onChange={(e)=>{setKeyword(e.target.value)}}/>
            <input className="search__input" type="text" placeholder="Location" value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
            <button className="search__button" type="submit">Search</button>
        </form>
        </div>

        <div className="posts" style={{marginTop:'7%'}}>
        <Post/>
        {
            posts.map(post=>{
                return(
                    <Post/>
                )
            })
        }
        </div>
        </div>


        
    )
}

export default Postview
