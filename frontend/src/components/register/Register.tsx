import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import {useSelector} from '../../store'
import {useNavigate} from 'react-router-dom'
import './Register.css'
import { registerAction } from '../../actions/user'
import { USER_REGISTER_RESET } from '../../constants/user'


interface IUser {
    name: string,
    email: string,
    password: string,
    phone: string,
    location:string,
    confirmPassword: string
}


const Register: React.FC = () => {

    const dispatch = useDispatch()
    const {loading,success} =useSelector(state=>state.userRegister)
    const navigate = useNavigate()

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        location: '',
        confirmPassword: ''
    } as IUser)

    const {name,email,password,confirmPassword,phone,location} =values

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.currentTarget
        setValues({
            ...values,
            [name]: value
        })
    }

    function handleSubmit(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        if(!name || !email || !password || !confirmPassword || !phone || !location) return alert('Please fill all the fields')
        if(password!==confirmPassword) return alert('Password and Confirm Password must be same')
        dispatch(registerAction(name,email,password,phone,location))
    }

    useEffect(()=>{
        if(success){
            navigate('/login')
            dispatch({type:USER_REGISTER_RESET})
        }
    },[success])

    return (
        <>
        <ToastContainer position='top-right' autoClose={5000} />
        {loading?<Spinner animation="border" variant="primary" />
        :
        <div className='register-form'>
            <Form className='form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='input' name='name' type="text" placeholder="Enter Name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='input' name='email' type="email" placeholder="Enter email" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='input' name='phone' type="text" placeholder="Enter phone number" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='input' name='location' type="text" placeholder="Enter your location" onChange={handleChange} />
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
        }
        
        </>
    )
}

export default Register
