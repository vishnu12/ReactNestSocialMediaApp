import React from 'react'
import './Comment.css'


interface CommentProps {
    comments:{comment:string,commentedby:string}[]|undefined
}

export const Comment:React.FC<CommentProps> = ({comments}) => {
    console.log(comments)
    return (
        <div className='comments-main'>
           <h3>Comments</h3> 
        </div>
    )
}
