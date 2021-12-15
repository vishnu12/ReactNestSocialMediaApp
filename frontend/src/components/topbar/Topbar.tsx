import React,{useState,useEffect, ReactText} from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from '../../store'
import { Form,Button } from 'react-bootstrap'
import { uploadImage } from '../../helper'
import './Topbar.css'
import { createPostAction,getPostAction } from '../../actions/post'

export const Topbar = () => {

    const dispatch = useDispatch()
    const {user:{_id}}=useSelector(state=>state.getUser)
    const {post}=useSelector(state=>state.createPost)
    const [image, setImage] = useState<File>()
    const [desc, setDesc] = useState<string>('')
    
    function handleImage(e:React.ChangeEvent<HTMLInputElement>){
        const fileList = e.target.files;
        if (!fileList) return;
        const file = fileList[0];
        setImage(file)
    }
    
    async function submit(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault()
        if(!image ||image==null){
        dispatch(createPostAction(desc,'',_id as string))
        setDesc('')
        }else{
        const {data}=await uploadImage(image!,'post','post')
        data && dispatch(createPostAction(desc,data.file.path,_id as string))
        setDesc('')
        }
    }

    useEffect(()=>{
      dispatch(getPostAction())
    },[post,dispatch])

    return (
        <div className='topbar-main'>
           
                    <Form className='topbar-form'>
                        <Form.Group className='topbar-form-group1' controlId="formText">
                            <Form.Control as='textarea' rows={2} cols={10} id='text' value={desc} name='desc' onChange={e=>setDesc(e.target.value)}/>                        
                            <Form.Control type='file' id='post' name='image' onChange={handleImage}/>
                        </Form.Group>
                        <Form.Group className='topbar-form-group2'>
                        <Button id="btn" type='submit' variant='outline-primary' onClick={e=>submit(e)}>Post</Button>
                        </Form.Group>
                    </Form>
        
        </div>
    )
}
