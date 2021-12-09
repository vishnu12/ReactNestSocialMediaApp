import React,{useEffect, useState} from 'react'
import './Banner.css'
import {Button} from 'react-bootstrap'
import {FaSearchLocation,FaPhone} from 'react-icons/fa'
import { useParams } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {AiOutlineMail} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { ModalContainer } from '../modal/Modal'
import { useSelector } from '../../store'
import { getImageUrl, isAdded, isLoggedInUser } from '../../helper'
import { getLoggedInUserAction, getUserAction, updateUserAction } from '../../actions/user'

const API_URL='http://localhost:5000'

//this page has an issue of not loading the default image

interface Props{
    coverPic: string
    profilePic: string
}

const Banner:React.FC = () => {

  const dispatch=useDispatch()
  const {user}=useSelector(state=>state.getUser)
  const {user:loggedInUser}=useSelector(state=>state.getLoggedInUser)
  const {success,user:updatedUser}=useSelector(state=>state.updateUser)
  const {id}=useParams()

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

  function handleAddFriend(e:React.MouseEvent<HTMLButtonElement, MouseEvent>):void{
    e.preventDefault()
    dispatch(updateUserAction(
     JSON.parse(`${localStorage.getItem('user')}`),
      {friends:id as string}
    ))
  }

  function handleFollow(e:React.MouseEvent<HTMLButtonElement, MouseEvent>):void{
    e.preventDefault()
    dispatch(updateUserAction(
     JSON.parse(`${localStorage.getItem('user')}`),
      {followers:id as string}
    ))
  }

 
  useEffect(()=>{
   dispatch(getLoggedInUserAction(JSON.parse(`${localStorage.getItem('user')}`)))
   if(id){
    dispatch(getUserAction(id))
   }else{
    dispatch(getUserAction(JSON.parse(`${localStorage.getItem('user')}`)))
   }
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
      {
        isLoggedInUser(JSON.parse(`${localStorage.getItem('user')}`),user._id)?
        <div className='banner-btn-container'>
      <Button variant='outline-primary' className='banner-btn' onClick={()=>handleShow('profile')}>Change Profile Pic</Button>
      <Button variant='outline-primary' className='banner-btn' onClick={()=>handleShow('cover')}>Change Cover Pic</Button>
      </div>
      :
      <div className='banner-btn-container'>
      <Button variant='outline-primary' className='banner-btn' onClick={(e)=>handleAddFriend(e)} >
        {isAdded(loggedInUser?.friends as string[],id)?'Unfriend':'Add Friend'}
        </Button>
      <Button variant='outline-primary' className='banner-btn' onClick={(e)=>handleFollow(e)} >
      {isAdded(loggedInUser?.followers as string[],id)?'Unfollow':'Follow'}
      </Button>
      </div>
        
      }
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
