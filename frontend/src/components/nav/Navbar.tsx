import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './Navbar.css'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/user'
import {useSelector} from '../../store'

export const NavbarComp = () => {
  const dispatch = useDispatch()
  const {user}=useSelector(state=>state.userLogin)
  const navigate = useNavigate()

  useEffect(()=>{
   if(!user){
     navigate('/login')
   }
  },[user])
  
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="/">Facebook</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='nav-right'>
      <Nav.Link as={Link} to='/profile' style={{color:'white'}}>Hi Vishnu</Nav.Link>
      <Nav.Link as={Button} style={{color:'white'}} eventKey={2} onClick={()=>dispatch(logout())}>
        Logout
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
