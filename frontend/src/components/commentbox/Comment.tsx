import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getImageUrl } from '../../helper'
import './Comment.css'


interface CommentProps {
    comments:{comment:string,commentedBy:{name:string,_id:string,profilepic?:string}}[]|undefined
}

export const Comment:React.FC<CommentProps> = ({comments}) => {
    console.log(comments)
    return (
        <div className='comments-main'>
           <h3>Comments</h3> 
           {
               comments?.map((itm,key)=>{
                   return (
                    <Card className='card' body>
                    <div className='card-sub'>
                    <Link to='/'><img src={getImageUrl(itm?.commentedBy.profilepic,'profile')} alt="profilepic" /></Link>
                    <h5>{itm.commentedBy.name}</h5>
                    </div>
                    <p>{itm.comment}</p>
                </Card>
                   )
               })
           }
        </div>
    )
}
