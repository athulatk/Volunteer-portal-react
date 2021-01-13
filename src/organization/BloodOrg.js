import React from 'react'
import { Table,Container } from 'react-bootstrap'
import Navbar4 from '../components/Navbar4'
import Navbar2 from '../components/Navbar2'

function BloodOrg() {
    return (
        <div>
        <Navbar4/>
        <Navbar2/>
        <div className="blood-display">
        <Table striped bordered hover>
        <thead>
        <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
        </div>
        
        </div>
    )
}

export default BloodOrg
