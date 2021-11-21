import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { Form ,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {FaGoogle} from 'react-icons/fa'
import {useSelector} from '../../store'
import {useDispatch} from 'react-redux'
import './Login.css'
import { loginAction } from '../../actions/user'


interface LoginInput{
  email:string
  password:string
}

export const Login:React.FC = () => {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {user,loading,error}=useSelector(state=>state.userLogin)

  const [values, setValues] = useState({
    email: '',
    password: ''
  } as LoginInput)

  const {email,password}=values

  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    const {name,value}=e.currentTarget
    setValues({...values,[name]:value})
    
  }

  function handleNormalLogin(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault()
    dispatch(loginAction(email,password))
  }

 function handleGoogleLogin(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault()
     window.open('http://localhost:5000/google','_self')
  }
 

  useEffect(()=>{
    if(user){
     navigate('/')
    }
  },[user])

    return (
        <div className='login-form'>
    <Form className='form'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control className='input' type="email" name="email" placeholder="Enter email" onChange={handleChange} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control className='input' type="password" name="password" placeholder="Password" onChange={handleChange}/>
  </Form.Group>
  <Button variant="outline-dark" className='sub-btn w-100 my-2' type="submit" onClick={(e)=>handleNormalLogin(e)}>
    Login
  </Button>
  <p>Do not have an account? <Link style={{textDecoration:'none'}} to='/register'>Register Here!!</Link></p>
  <h4>OR</h4>
  <Button variant="outline-dark" className='sub-btn w-100 my-2' type="submit" onClick={(e)=>handleGoogleLogin(e)}>
   <span><FaGoogle /></span> Login with Google
  </Button>
</Form> 
        </div>
    )
}
