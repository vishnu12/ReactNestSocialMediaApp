import React from 'react'
import { Post } from '../post/Post'
import './Posts.css'

export const Posts = () => {

    let arr:Array<number>=[1,2,3]
    return (
        <div className='postloader-main'>
            {
                arr.map((itm,index)=>(
                    <Post image={'/images/cover.jpg'} 
                    desc='
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, consequuntur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, animi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, in.
                    '
                    />
                ))
            }
        </div>
    )
}
