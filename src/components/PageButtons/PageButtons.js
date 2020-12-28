import { Button } from '@material-ui/core'
import React from 'react'
import './PageButtons.css'

const PageButtons = ({linkto, image, title}) => {
    return (
        <div className='pagebuttons'>
            <img src={image} alt="" />
            <p>{title}</p>
        </div>
    )
}

export default PageButtons
