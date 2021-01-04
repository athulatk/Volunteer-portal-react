import React from 'react'
import Navbar3 from '../components/Navbar3'
import Navbar2 from '../components/Navbar2'
import Categoriesorg from './components/Categoriesorg'
function Home_org() {
    return (
        <div>
            <Navbar3/>
            <Navbar2/>
            <h3 style={{textAlign:"center",color:"#981041",marginTop:"2%"}}>Categories</h3>
            <Categoriesorg/>
        </div>
    )
}

export default Home_org