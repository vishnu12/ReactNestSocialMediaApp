import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Register.css'

const Register: React.FC = () => {
    return (
        <div className='register-form'>
            <Form className='form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='input' type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='input' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='input' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='input' type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Button variant="outline-dark" className='sub-btn w-100 my-2' type="submit">
                    Register
                </Button>
                <p>Already have an account? <Link style={{ textDecoration: 'none' }} to='/login'>Login Here!!</Link></p>
            </Form>
        </div>
    )
}

export default Register
