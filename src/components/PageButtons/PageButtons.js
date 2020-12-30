import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-scroll'
import './PageButtons.css'

const PageButtons = ({keyClass, linkto, image, title}) => {
    let cssClasss = 'pagebuttons'+keyClass
    console.log(keyClass)
    return (
        <Link to={linkto}>
            <div className={cssClasss}>
                <img src={image} alt="" />
                <p>{title}</p>
            </div>
        </Link>
    )
}

export default PageButtons
