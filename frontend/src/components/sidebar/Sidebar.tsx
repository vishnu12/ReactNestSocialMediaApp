import React from 'react'
import './Sidebar.css'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    let arr:Array<number>=[1,2,3,6,4]
    return (
        <div className='sidebar-main'>
            <h3>Friends Online</h3>
           {
               arr.map((itm,index)=>(
                 <Link style={{textDecoration:'none',color:'#000'}} to='/profile'>
                 <Card className='card' body>
                     <div className='card-sub'>
                     <img src="/images/cover.jpg" alt="img" />
                     <h5>Vishnu J R</h5>
                     </div>
                     <div className='card-online'></div>
                 </Card>
                 </Link>
               ))
           }
        </div>
    )
}
