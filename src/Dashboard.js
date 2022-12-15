import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from './Components/auth'


function Dashboard() {
  const auth=useAuth()
  const userString=sessionStorage.getItem('user')

  const handleLogout = () => {
    auth.logout()
    
  }
  return (
    <Container>
     <h1 className="dashboardmargin">Dashboard</h1>
     <h3>Welcome, {userString}</h3>
     <Button variant='danger' onClick={handleLogout} className="mb-2">Logout</Button>
     <section className='members-section'>
     <Link to={"/labmembers"} className="btn btn-secondary mb-2" >Go to Lab Members List</Link>
     </section>
     <section className='publications-section'>
     <Link to={"/publications"} className="btn btn-secondary mb-2" >Go to Publications List</Link>
     </section>
     <section className='project-section'>
     <Link to={"/projects"} className="btn btn-secondary mb-2" >Go to Projects List</Link>
     </section>
     <section className='authors-section'>
     <Link to={"/authors"} className="btn btn-secondary mb-2" >Go to Authors List</Link>
     </section>

    </Container>
  )
}

export default Dashboard