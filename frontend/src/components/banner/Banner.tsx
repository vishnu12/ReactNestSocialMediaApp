import React,{useEffect, useState} from 'react'
import './Banner.css'
import {Button, Form} from 'react-bootstrap'
import {FaSearchLocation,FaPhone,FaEdit} from 'react-icons/fa'
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

const Banner:React.FC = () => {

  const dispatch=useDispatch()
  const {user}=useSelector(state=>state.getUser)
  const {user:loggedInUser}=useSelector(state=>state.getLoggedInUser)
  const {success,user:updatedUser}=useSelector(state=>state.updateUser)
  const {id}=useParams()

  const [show, setShow] = useState<boolean>(false)
  const [imgType, setImgType] = useState<string>('')
  const [edit, setEdit] = useState<boolean>(false)
  const [edit1, setEdit1] = useState<boolean>(false)
  const [edit2, setEdit2] = useState<boolean>(false)
  const [values, setvalues] = useState({
    location:user.location,
    phone:user.phone,
    email:user.email,
  })

  const {location,phone,email}=values

  function handleUpdateChange(e:React.ChangeEvent<HTMLInputElement>){
    setvalues({...values,[e.target.name]:e.target.value})
  }

  function handleShow(arg:string):void {
  if(arg==='profile'){
    setImgType('profile')
    setShow(true)
  }else if(arg==='cover'){
    setImgType('cover')
    setShow(true)
  }
  }

  function handleAddFriend():void{
    dispatch(updateUserAction(
     JSON.parse(`${localStorage.getItem('user')}`),
      {friends:id as string}
    ))
  }

  function handleFollow():void{
    dispatch(updateUserAction(
     JSON.parse(`${localStorage.getItem('user')}`),
      {following:id as string}
    ))
  }

  function handleUpdate(arg:string):void{
     if(arg==='location'){
      dispatch(updateUserAction(
        JSON.parse(`${localStorage.getItem('user')}`),
         {location:location as string}
       ))
       setEdit(false)
     }else if(arg==='phone'){
      dispatch(updateUserAction(
        JSON.parse(`${localStorage.getItem('user')}`),
         {phone:phone as string}
       ))
       setEdit1(false)
     }else if(arg==='email'){
      dispatch(updateUserAction(
        JSON.parse(`${localStorage.getItem('user')}`),
         {email:email as string}
       ))
       setEdit2(false)
     }
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
            <div className='banner-details-top'>
            <p>{user.followers?.length===1?`${user.followers.length} follower`:`${user.followers?.length} followers`}</p>
            <p>{user.following?.length} following</p>
            <p>{user.friends?.length===1?`${user.friends.length} friend`:`${user.friends?.length} friends`}</p>
            </div>
      {
        isLoggedInUser(JSON.parse(`${localStorage.getItem('user')}`),user._id)?
        <div className='banner-btn-container'>
      <Button variant='outline-primary' className='banner-btn' onClick={()=>handleShow('profile')}>Change Profile Pic</Button>
      <Button variant='outline-primary' className='banner-btn' onClick={()=>handleShow('cover')}>Change Cover Pic</Button>
      </div>
      :
      <div className='banner-btn-container'>
      <Button variant='outline-primary' className='banner-btn' onClick={()=>handleAddFriend()} >
        {isAdded(loggedInUser?.friends as string[],id)?'Unfriend':'Add Friend'}
        </Button>
      <Button variant='outline-primary' className='banner-btn' onClick={()=>handleFollow()} >
      {isAdded(loggedInUser?.following as string[],id)?'Unfollow':'Follow'}
      </Button>
      </div>
        
      }
      <div className='banner-description'>
        {
          edit?
          <Form className='banner-form'>
          <Form.Group className="mb-3">
            <Form.Control className='input' type="text" name="location" value={location} onChange={handleUpdateChange} placeholder="Enter location" />
          </Form.Group>
          <Form.Group className="mb-3">
          <Button variant="outline-primary" className='banner-btn' type="button" onClick={()=>handleUpdate('location')}>
            Update
          </Button>
          <Button variant="outline-primary" className='banner-btn' type="button" onClick={()=>setEdit(prev=>!prev)}>
          Cancel
         </Button>
          </Form.Group>
          </Form>
          :
         <p><span style={{color:'blueviolet'}}><FaSearchLocation /></span> {user.location} 
        {isLoggedInUser(JSON.parse(`${localStorage.getItem('user')}`),user._id) && 
        <FaEdit style={{cursor:'pointer'}} onClick={()=>setEdit(prev=>!prev)} />}</p>
        }
        {
          edit1?
          <Form className='banner-form'>
        <Form.Group className="mb-3">
          <Form.Control className='input' type="text" name="phone" value={phone} onChange={handleUpdateChange} placeholder="Enter phone" />
        </Form.Group>
        <Form.Group className="mb-3">
        <Button variant="outline-primary" className='banner-btn' type="submit" onClick={()=>handleUpdate('phone')}>
          Update
        </Button>
        <Button variant="outline-primary" className='banner-btn' type="button" onClick={()=>setEdit1(prev=>!prev)}>
          Cancel
         </Button>
        </Form.Group>
        </Form>
          :
        <p><span style={{color:'green'}}><FaPhone /></span> {user.phone} 
        {isLoggedInUser(JSON.parse(`${localStorage.getItem('user')}`),user._id) && 
        <FaEdit style={{cursor:'pointer'}} onClick={()=>setEdit1(prev=>!prev)} />}</p>
        }
        {
          edit2?
          <Form className='banner-form'>
        <Form.Group className="mb-3">
          <Form.Control className='input' type="email" name="email" value={email} onChange={handleUpdateChange} placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
        <Button variant="outline-primary" className='banner-btn' type="submit" onClick={()=>handleUpdate('email')}>
          Update
        </Button>
        <Button variant="outline-primary" className='banner-btn' type="button" onClick={()=>setEdit2(prev=>!prev)}>
          Cancel
         </Button>
        </Form.Group>
        </Form>
          :
        <p><span style={{color:''}}><AiOutlineMail /></span> {user.email} 
        {isLoggedInUser(JSON.parse(`${localStorage.getItem('user')}`),user._id) && 
        <FaEdit style={{cursor:'pointer'}} onClick={()=>setEdit2(prev=>!prev)} />}</p>
        }
      </div>
      <Link to='/' className='btn btn-outline-primary banner-btn'>Back Home</Link>
      </div>
      </div>
  )
}

export default Banner
