import React from 'react'
import Dispimg from './components/Dispimg'
import Navbar1 from './components/Navbar1'
import Navbar2 from './components/Navbar2'
import Cards from './components/Cards'

function Home() {
    return (
        <div>
            <Navbar1/>
            <Navbar2/>
            <Dispimg/>
            <Cards/>
        </div>
    )
}

export default Home
