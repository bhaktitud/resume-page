import React from 'react'
import './ProfileLinks.css'

const ProfileLinks = ({linkto, Icon, name}) => {
    return (
        <div className='profilelink'>
            <Icon />
            <a href={linkto} target='__blank'>{name}</a>
        </div>
    )
}

export default ProfileLinks
