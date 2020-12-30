import { Avatar } from '@material-ui/core'
import React from 'react'
import './Header.css'
import { motion } from 'framer-motion';

function Header() {
    return (
        <div className='header'>
            <motion.img 
                src='https://i.ibb.co/Vm58kjH/Logo-Makr-0-Itc-Gw.png'
                alt=""
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{
                    scale: 0.8,
                    rotate: -360,
                    borderRadius: "100%"
                }}
            />
        </div>
    )
}

export default Header
