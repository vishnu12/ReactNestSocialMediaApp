import React,{useState,useEffect} from 'react'
import './Post.css'
import {AiFillLike,AiFillDislike} from 'react-icons/ai'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from 'react-redux'
import {Form,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Post as PostType } from '../../action-types/post'
import {useSelector} from '../../store'
import { updatePostAction } from '../../actions/post'
import { getImageUrl } from '../../helper'

const API_URL='http://localhost:5000'

interface PostProps {
    post:PostType
}
export const Post:React.FC<PostProps> = ({post}) => {

    const [comment, setComment] = useState('')
    const [commented, setCommented] = useState(false)

    const dispatch=useDispatch()
    const {post:updatedPost,success}=useSelector(state=>state.updatePost)
    const navigate=useNavigate()

    function handleLike(id:string){
        dispatch(updatePostAction(id,{likes:JSON.parse(`${localStorage.getItem('user')}`)}))
    }

    function handleDisLike(id:string){
        dispatch(updatePostAction(id,{dislikes:JSON.parse(`${localStorage.getItem('user')}`)}))
    }

    function handleComment(e:React.MouseEvent<HTMLButtonElement, MouseEvent>,postId:string,commentedBy:string){
        e.preventDefault()
        if(comment===''||comment===undefined){
            alert('Please enter a comment')
        }else{
            dispatch(updatePostAction(postId,{comments:{comment,commentedBy}}))
            setCommented(true)
        }
       
    }

    useEffect(()=>{
         if(success && commented){
            setComment('')
            setCommented(false)
            navigate(`/posts/${updatedPost._id}`)
         }
    },[success,updatedPost])

    return (
        <>
        <ToastContainer position='top-right' autoClose={5000} />
        <div className='post-main'>
            <div className='post-top'>
              <img src={getImageUrl(post.postedBy?.profilepic as string,'profile')} alt="profilepic" />
              <Link to={`/profile/${post.postedBy?._id}`}
              style={{textDecoration:'none'}}
              ><p>{post.postedBy?.name}</p></Link>
            </div>
            {
                post.image && 
                <div className='img-container'>
                <Link to={`/posts/${post._id}`}><img src={`${API_URL}/${post.image}`} alt='post' /></Link>
                </div>
            }

            {
                post.description && 
                <div className='content'>
              <Link to={`/posts/${post._id}`} style={{textDecoration:'none',color:'#000'}}>
              <p>
                 {post.description}
             </p>
             </Link>
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
                     <Form.Control type='text' id='comment' name='comment' onChange={e=>setComment(e.currentTarget.value)} />
                     <Button variant='outline-primary' id='btn' onClick={(e)=>handleComment(e,post?._id as string,JSON.parse(`${localStorage.getItem('user')}`) as string)}>comment</Button>
                 </Form.Group>
             </Form>
            </div>
           
        </div>
        </>
    )
}
