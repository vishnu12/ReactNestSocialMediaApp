import React from 'react'
import {Link} from 'react-router-dom'
import { Form ,Button} from 'react-bootstrap'
import {FaGoogle} from 'react-icons/fa'
import './Login.css'


export const Login:React.FC = () => {
    return (
        <div className='login-form'>
    <Form className='form'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control className='input' type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control className='input' type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="outline-dark" className='sub-btn w-100 my-2' type="submit">
    Login
  </Button>
  <p>Do not have an account? <Link style={{textDecoration:'none'}} to='/register'>Register Here!!</Link></p>
  <h4>OR</h4>
  <Button variant="outline-dark" className='sub-btn w-100 my-2' type="submit">
   <span><FaGoogle /></span> Login with Google
  </Button>
</Form> 
        </div>
    )
}
