import React,{useState} from 'react'
import './Banner.css'
import {Button} from 'react-bootstrap'
import {FaSearchLocation,FaPhone} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { ModalContainer } from '../modal/Modal'
import { useSelector } from '../../store'
import { getImageUrl } from '../../helper'

const API_URL='http://localhost:5000'

interface Props{
    coverPic: string
    profilePic: string
}

const Banner:React.FC = () => {

  const {user}=useSelector(state=>state.getUser)

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
        <p><span style={{color:'blueviolet'}}><FaSearchLocation /></span> Trivandrum</p>
        <p><span style={{color:'green'}}><FaPhone /></span> 8943619285</p>
        <p><span style={{color:''}}><AiOutlineMail /></span> vishnu007jr@gmail.com</p>
      </div>
      <Link to='/' className='btn btn-outline-primary banner-btn'>Back Home</Link>
      </div>
      </div>
  )
}

export default Banner
