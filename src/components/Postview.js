import React,{useState,useEffect} from 'react'
import './Components.css'
import axios from 'axios'
import Post from './Post'

function Postview({type}) {

    const[keyword,setKeyword]=useState('');
    const[location,setLocation]=useState('');

    const[posts,setPosts]=useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/user/posts/${type}`)
        .then((res)=>{
            console.log(res);
            setPosts(res.data);
        })
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
        {
            posts.map(post=>{
                return(
                    <Post key={post.id} id={post.id} title={post.title} description={post.description} district={post.district} location={post.location} name={post.name} type={type}/>
                )
            })
        }
        </div>
        </div>


        
    )
}

export default Postview
