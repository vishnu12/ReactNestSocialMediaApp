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

   useEffect(()=>{
       dispatch(getPostAction())
   },[createdSuccess,dispatch])

    return (
        <div className='postloader-main'>
            {
                posts && posts.map((itm,index)=>(
                    <Post image={itm.image} 
                    desc={itm.description}
                    postedBy={itm.postedBy as any}
                    key={index}
                    />
                ))
            }
        </div>
    )
}
