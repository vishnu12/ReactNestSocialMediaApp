import React from 'react'
import { NavbarComp } from '../../components/nav/Navbar'
import { ViewPost } from '../../components/viewpost/ViewPost'
import './View.css'

export const View = () => {
    return (
        <div className='view-main'>
            <NavbarComp />
            <ViewPost />
        </div>
    )
}
