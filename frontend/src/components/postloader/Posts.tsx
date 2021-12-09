import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { getPostAction } from '../../actions/post'
import {useSelector} from '../../store'
import { Post } from '../post/Post'
import './Posts.css'

export const Posts = () => {
    const dispatch = useDispatch()
    const {success:createdSuccess}=useSelector(state=>state.createPost)
    const {posts}=useSelector(state=>state.getPosts)
    const {post,success:updateSuccess}=useSelector(state=>state.updatePost)

   useEffect(()=>{
       dispatch(getPostAction())
   },[createdSuccess,dispatch,updateSuccess,post])

    return (
        <div className='postloader-main'>
            {
                posts && posts.map((itm,index)=>(
                    <Post 
                    post={itm}
                    key={index}
                    />
                ))
            }
        </div>
    )
}
