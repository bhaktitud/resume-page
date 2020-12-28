import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-scroll'
import './PageButtons.css'

const PageButtons = ({linkto, image, title}) => {
    return (
        <Link to={linkto}>
            <div className='pagebuttons'>
                <img src={image} alt="" />
                <p>{title}</p>
            </div>
        </Link>
    )
}

export default PageButtons
