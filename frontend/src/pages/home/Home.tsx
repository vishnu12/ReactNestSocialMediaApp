import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { NavbarComp } from '../../components/nav/Navbar'
import Cookies from 'js-cookie'
import { Posts } from '../../components/postloader/Posts'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Topbar } from '../../components/topbar/Topbar'
import {useSelector} from '../../store'
import './Home.css'

export const Home = () => {

    const navigate = useNavigate()
    const {user}=useSelector(state=>state.userLogin)

    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    },[user])

    return (
        <div className='home-main'>
            <NavbarComp />
           <Container fluid className='home-container'>
            <Row>
                <Col md={8}>
                    <Topbar />
                    <Posts />
                </Col>
                <Col md={4}>
                    <Sidebar />
                </Col>
            </Row>
           </Container>
        </div>
    )
}
