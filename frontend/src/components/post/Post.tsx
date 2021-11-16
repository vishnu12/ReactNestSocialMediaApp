import React from 'react'
import './Post.css'
import {AiFillLike,AiFillDislike} from 'react-icons/ai'
import {Form,Button} from 'react-bootstrap'



interface PostProps {
    image?:string,
    desc?:string
}
export const Post:React.FC<PostProps> = ({image,desc}) => {
    return (
        <div className='post-main'>
            <div className='post-top'>
              <img src="/images/cover.jpg" alt="" />
              <p>Vishnu</p>
            </div>
            {
                image && 
                <div className='img-container'>
                <img src={image} alt='post' />
                </div>
            }

            {
                desc && 
                <div className='content'>
             <p>
                 {desc}
             </p>
               </div>
            }

            <div className='like'>
            <div className='like-sub1'>
            <span style={{color:'green',cursor:'pointer'}}><AiFillLike />10</span>
            </div> 
            <div className='like-sub2'>
            <span style={{color:'red',cursor:'pointer'}}><AiFillDislike />5</span>
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
