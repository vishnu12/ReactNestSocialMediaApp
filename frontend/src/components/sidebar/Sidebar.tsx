import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import './Sidebar.css'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useSelector} from '../../store'
import { getFriendsAction } from '../../actions/user'
import { getImageUrl } from '../../helper'

export const Sidebar = () => {
    const dispatch=useDispatch()
    const {friends,loading}=useSelector(state=>state.getFriends)

    useEffect(()=>{
        dispatch(getFriendsAction(JSON.parse(`${localStorage.getItem('user')}`)))
    },[])

    return (
        <div className='sidebar-main'>
            <h3>Friends Online</h3>
           {
               friends.length!==0?friends?.map((itm,index)=>(
                 <Link key={index} style={{textDecoration:'none',color:'#000'}} to={`/profile/${itm._id}`}>
                 <Card className='card' body>
                     <div className='card-sub'>
                     <img src={getImageUrl(itm.profilepic,'profile')} alt="profile-img" />
                     <h5>{itm.name}</h5>
                     </div>
                     <div className='card-online'></div>
                 </Card>
                 </Link>
               ))
               :
               <h5>None of your friends are online</h5>
           }
        </div>
    )
}
