import React from 'react'
import './Post.css'
import {AiFillLike,AiFillDislike} from 'react-icons/ai'
import {useDispatch} from 'react-redux'
import {Form,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Post as PostType } from '../../action-types/post'
import {useSelector} from '../../store'
import { updatePostAction } from '../../actions/post'

const API_URL='http://localhost:5000'

interface PostProps {
    post:PostType
}
export const Post:React.FC<PostProps> = ({post}) => {

    const dispatch=useDispatch()

    function handleLike(id:string){
        dispatch(updatePostAction(id,{likes:post.postedBy?._id}))
    }

    function handleDisLike(id:string){
        dispatch(updatePostAction(id,{dislikes:post.postedBy?._id}))
    }

    return (
        <div className='post-main'>
            <div className='post-top'>
              <img src="/images/cover.jpg" alt="" />
              <Link to={`/profile/${post.postedBy?._id}`}
              style={{textDecoration:'none'}}
              ><p>{post.postedBy?.name}</p></Link>
            </div>
            {
                post.image && 
                <div className='img-container'>
                <img src={`${API_URL}/${post.image}`} alt='post' />
                </div>
            }

            {
                post.description && 
                <div className='content'>
             <p>
                 {post.description}
             </p>
               </div>
            }

            <div className='like'>
            <div className='like-sub1'>
            <span style={{color:'green',cursor:'pointer'}} onClick={()=>handleLike(post._id as string)}><AiFillLike />{post.likes?.length}</span>
            </div> 
            <div className='like-sub2'>
            <span style={{color:'red',cursor:'pointer'}} onClick={()=>handleDisLike(post._id as string)}><AiFillDislike />{post.dislikes?.length}</span>
            </div>
            </div>

            <div className="comment">
             <Form>
                 <Form.Group className='comment-gp' controlId="exampleForm.ControlTextarea1">
                     <Form.Control type='text' id='comment' name='comment' />
                     <Button variant='outline-primary' id='btn'>comment</Button>
                 </Form.Group>
             </Form>
            </div>
           
        </div>
    )
}
