import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from '../../store'
import {useDispatch} from 'react-redux'
import './ViewPost.css'
import { getPostByIdAction } from '../../actions/post'
import { Post } from '../post/Post'
import { Col, Container, Row } from 'react-bootstrap'
import { Comment } from '../commentbox/Comment'


export const ViewPost = () => {
    const {id} = useParams()
    const dispatch=useDispatch()
    const {post}=useSelector(state=>state.getPostById)
    const {success,post:updatedPost}=useSelector(state=>state.updatePost)

    useEffect(()=>{
        dispatch(getPostByIdAction(id as string))
    },[id,dispatch,success,updatedPost])

    return (
        <div className='view-post-main'>
            <Container fluid>
                <Row>
                    <Col md={8}>
                    <Post post={post} />
                    </Col>
                    <Col md={4}>
                        <Comment comments={post.comments} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
