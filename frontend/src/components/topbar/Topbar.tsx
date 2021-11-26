import React,{useState,useEffect, ReactText} from 'react'
import { Form,Button } from 'react-bootstrap'
import { uploadImage } from '../../helper'
import './Topbar.css'

export const Topbar = () => {

    const [image, setImage] = useState<File>()
    
    function handleImage(e:React.ChangeEvent<HTMLInputElement>){
        const fileList = e.target.files;
        if (!fileList) return;
        const file = fileList[0];
        setImage(file)
    }
    
    async function submit(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault()
        const {data}=await uploadImage(image!,'post')
        
    }

 
    return (
        <div className='topbar-main'>
           
                    <Form className='topbar-form'>
                        <Form.Group className='topbar-form-group1' controlId="formText">
                            <Form.Control as='textarea' rows={2} cols={10} id='text' name='desc'/>                        
                            <Form.Control type='file' id='post' name='image' onChange={handleImage}/>
                        </Form.Group>
                        <Form.Group className='topbar-form-group2'>
                        <Button id="btn" type='submit' variant='outline-primary' onClick={e=>submit(e)}>Post</Button>
                        </Form.Group>
                    </Form>
        
        </div>
    )
}
