import React,{useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import { Modal, Button,Form } from 'react-bootstrap'
import './Modal.css'
import { updateUserAction } from '../../actions/user'
import { useSelector } from '../../store'
import { uploadImage } from '../../helper'


interface ModalProps {
    show: boolean,
    onHide:React.Dispatch<React.SetStateAction<boolean>>
    type: string
}

export const ModalContainer: React.FC<ModalProps> = (props) => {

    const dispatch = useDispatch()
    const {user}=useSelector(state=>state.getUser)
    const {success,loading,error,user:updatedUser}=useSelector(state=>state.updateUser)
    const [image, setImage] = useState<File>()

    function handleImage(e:React.ChangeEvent<HTMLInputElement>){
        const fileList = e.target.files;
        if (!fileList) return;
        const file = fileList[0];
        setImage(file)
    }

    useEffect(()=>{
        if(success){
            props.onHide(false)
        }
    },[success,updatedUser])

    async function handleSubmit(image:File|undefined,e:React.MouseEvent<HTMLButtonElement, MouseEvent>):Promise<void>{
        e.preventDefault()
      if(!image||image==null){
          props.onHide(false)
      }else{
        if(props.type==='cover'){
            const {data}=await uploadImage(image!,'cover',`${props.type}`)
            dispatch(updateUserAction(user!._id as string,{coverpic:data?.file.path}))
        }else{
            const {data}=await uploadImage(image!,'profile',`${props.type}`)
            dispatch(updateUserAction(user!._id as string,{profilepic:data?.file.path}))
        }
        
        
      }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Upload {props.type} picture
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='modal-form'>
                    <Form.Group className='modal-form-group1' controlId="formText">
                        <Form.Control type='file' id='post' name='image' onChange={handleImage} />
                    </Form.Group>
                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(e)=>handleSubmit(image,e)}>Upload</Button>
            </Modal.Footer>
        </Modal>
    )
}
