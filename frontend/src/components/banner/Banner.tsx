import React,{useEffect, useState} from 'react'
import './Banner.css'
import {Button} from 'react-bootstrap'
import {FaSearchLocation,FaPhone} from 'react-icons/fa'
import {useDispatch} from 'react-redux'
import {AiOutlineMail} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { ModalContainer } from '../modal/Modal'
import { useSelector } from '../../store'
import { getImageUrl } from '../../helper'
import { getUserAction } from '../../actions/user'

const API_URL='http://localhost:5000'

interface Props{
    coverPic: string
    profilePic: string
}

const Banner:React.FC = () => {

  const dispatch=useDispatch()
  const {user}=useSelector(state=>state.getUser)
  const {success,user:updatedUser}=useSelector(state=>state.updateUser)

  const [show, setShow] = useState<boolean>(false)
  const [imgType, setImgType] = useState<string>('')

  function handleShow(arg:string):void {
  if(arg==='profile'){
    setImgType('profile')
    setShow(true)
  }else if(arg==='cover'){
    setImgType('cover')
    setShow(true)
  }
  }

  useEffect(()=>{
   dispatch(getUserAction(JSON.parse(`${localStorage.getItem('user')}`)))
  },[success,dispatch,updatedUser])


  return (
    <div className='banner-main'>
      <ModalContainer show={show} onHide={setShow} type={imgType} />
        <img className='cover-img' src={getImageUrl(user.coverpic,'cover')} alt="cover-img" />
      <div className="profile-img-container">
          <img className='profile-img' src={getImageUrl(user.profilepic,'profile')} alt="profile-img" />
      </div>
      <div className='banner-details'>
            <h1>{user.name}</h1>
      <div className='banner-btn-container'>
      <Button variant='outline-primary' className='banner-btn' onClick={()=>handleShow('profile')}>Change Profile Pic</Button>
      <Button variant='outline-primary' className='banner-btn' onClick={()=>handleShow('cover')}>Change Cover Pic</Button>
      </div>
      <div className='banner-description'>
        <p><span style={{color:'blueviolet'}}><FaSearchLocation /></span> {user.location}</p>
        <p><span style={{color:'green'}}><FaPhone /></span> {user.phone}</p>
        <p><span style={{color:''}}><AiOutlineMail /></span> {user.email}</p>
      </div>
      <Link to='/' className='btn btn-outline-primary banner-btn'>Back Home</Link>
      </div>
      </div>
  )
}

export default Banner
