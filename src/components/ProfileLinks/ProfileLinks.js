import React from 'react'
import './ProfileLinks.css'

const ProfileLinks = ({linkto, Icon, name}) => {
    
    const openLink = (linkTo) => {
        const win = window.open(linkTo, "_blank");
        win.focus();
    }

    return (
        <div className='profilelink'>
            <Icon />
            <p onClick={() => openLink(linkto)}>{name}</p>
        </div>
    )
}

export default ProfileLinks
