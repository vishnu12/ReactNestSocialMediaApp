import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { NavbarComp } from '../../components/nav/Navbar'
import { Posts } from '../../components/postloader/Posts'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Topbar } from '../../components/topbar/Topbar'
import './Home.css'

export const Home = () => {
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
