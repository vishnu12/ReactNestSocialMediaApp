import React,{useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './Navbar.css'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import {useSelector} from '../../store'
import { Link } from 'react-router-dom'
import { getUserAction, logout } from '../../actions/user'
import {readDataFromCookie} from '../../helper'

export const NavbarComp = () => {
 const dispatch = useDispatch()
 const navigate = useNavigate()
 const {loading,error,user}=useSelector(state=>state.getUser)


  useEffect(()=>{
    readDataFromCookie()
    dispatch(getUserAction(JSON.parse(`${localStorage.getItem('user')}`)))
    if(!JSON.parse(`${localStorage.getItem('user')}`)||JSON.parse(`${localStorage.getItem('user')}`)===null){
       navigate('/login')
    }
  },[dispatch])

 
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/'>Facebook</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='nav-right'>
      <Nav.Link as={Link} to='/profile' style={{color:'white'}}>Hi {user?.name}</Nav.Link>
      <Nav.Link as={Button} style={{color:'white'}} eventKey={2} onClick={()=>dispatch(logout(navigate))}>
        Logout
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
