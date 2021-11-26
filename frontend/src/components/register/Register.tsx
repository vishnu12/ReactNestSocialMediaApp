import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useSelector} from '../../store'
import {useNavigate} from 'react-router-dom'
import './Register.css'
import { registerAction } from '../../actions/user'


const Register: React.FC = () => {

    const dispatch = useDispatch()
    const {loading,error,success,user} =useSelector(state=>state.userRegister)
    const navigate = useNavigate()

    interface IUser {
        name: string,
        email: string,
        password: string,
        confirmPassword: string
    }

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    } as IUser)

    const {name,email,password,confirmPassword} =values

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.currentTarget
        setValues({
            ...values,
            [name]: value
        })
    }

    function handleSubmit(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        if(password!==confirmPassword) return alert('Password and Confirm Password must be same')
        dispatch(registerAction(name,email,password))
    }

    useEffect(()=>{
        if(success){
            alert('Registered Successfully')
            navigate('/login')
        }
    },[success])

    return (
        <div className='register-form'>
            <Form className='form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='input' name='name' type="text" placeholder="Enter Name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='input' name='email' type="email" placeholder="Enter email" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='input' name='password' type="password" placeholder="Password" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='input' name='confirmPassword' type="password" placeholder="Confirm Password" onChange={handleChange} />
                </Form.Group>
                <Button variant="outline-dark" className='sub-btn w-100 my-2' type="submit" onClick={e=>handleSubmit(e)}>
                    Register
                </Button>
                <p>Already have an account? <Link style={{ textDecoration: 'none' }} to='/login'>Login Here!!</Link></p>
            </Form>
        </div>
    )
}

export default Register
