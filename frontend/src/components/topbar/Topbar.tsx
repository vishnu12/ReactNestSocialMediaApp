import React from 'react'
import { Form,Button } from 'react-bootstrap'
import './Topbar.css'

export const Topbar = () => {
    return (
        <div className='topbar-main'>
           
                    <Form className='topbar-form'>
                        <Form.Group className='topbar-form-group1' controlId="formText">
                            <Form.Control as='textarea' rows={2} cols={10} id='text' name='text'/>                        
                            <Form.Control type='file' id='post' name='post'/>
                        </Form.Group>
                        <Form.Group className='topbar-form-group2'>
                        <Button id="btn" variant='outline-primary'>Post</Button>
                        </Form.Group>
                    </Form>
        
        </div>
    )
}
