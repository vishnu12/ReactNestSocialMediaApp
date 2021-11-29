import React,{useState} from 'react'
import { Modal, Button,Form } from 'react-bootstrap'
import './Modal.css'

interface ModalProps {
    show: boolean,
    onHide: () => void,
    type: string
}

export const ModalContainer: React.FC<ModalProps> = (props) => {

    const [image, setImage] = useState<File>()

    function handleImage(e:React.ChangeEvent<HTMLInputElement>){
        const fileList = e.target.files;
        if (!fileList) return;
        const file = fileList[0];
        setImage(file)
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
                <Button onClick={props.onHide}>Upload</Button>
            </Modal.Footer>
        </Modal>
    )
}
