import React from 'react'
import './Banner.css'
import {Button} from 'react-bootstrap'
import {FaSearchLocation,FaPhone} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {Link} from 'react-router-dom'

interface Props{
    coverPic: string
    profilePic: string
}

const Banner:React.FC = () => {
  return (
    <div className='banner-main'>
        <img className='cover-img' src="images/cover.jpg" alt="cover-img" />
      <div className="profile-img-container">
          <img className='profile-img' src="images/sample-profile-pic.png" alt="profile-img" />
      </div>
      <div className='banner-details'>
            <h1>Vishnu J R</h1>
      <div className='banner-btn-container'>
      <Button variant='outline-primary' className='banner-btn'>Change Profile Pic</Button>
      <Button variant='outline-primary' className='banner-btn'>Change Cover Pic</Button>
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
