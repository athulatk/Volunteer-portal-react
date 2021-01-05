import React from 'react'
import './Components.css'
import Post from './Post'
//Checkout .posts css to remove or not

function Postview() {
    return (
        <div className="postview">
            <div className="search__div">
            <form className="search__form">
            <input className="search__input" type="text" placeholder="Keyword"/>
            <input className="search__input" type="text" placeholder="Location"/>
            <button className="search__button" type="submit">Search</button>
        </form>
        </div>


        <div className="posts" style={{
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: '5%'}}>
        <Post/>
        <Post/>
        <Post/>
        </div>
        </div>


        
    )
}

export default Postview
