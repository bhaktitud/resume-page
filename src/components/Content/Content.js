import { Facebook, GitHub, LinkedIn } from '@material-ui/icons'
import React from 'react'
import PageButtons from '../PageButtons/PageButtons'
import ProfileLinks from '../ProfileLinks/ProfileLinks'
import './Content.css'
import { motion } from 'framer-motion';
import Particles from 'react-particles-js'

function Content() {
    
    const projectExp = 'https://www.flaticon.com/svg/static/icons/svg/3921/3921399.svg'
    const education = 'https://www.flaticon.com/svg/static/icons/svg/2000/2000887.svg'
    const exp = 'https://www.flaticon.com/svg/static/icons/svg/2726/2726551.svg'

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2
          }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
    };

    return (
        <motion.div  className='content'>
            <motion.div  initial="hidden" animate="visible" variants={container} className='content__left'>
                <motion.h1 
                    className='content__leftName'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{
                      scale: 0.5,
                      borderRadius: "100%"
                    }}
                >
                    Bhakti Budiman Novanda
                </motion.h1>
                <h3>Front-End Developer</h3>
                <motion.div variants={item} className='content__leftIcons'>
                    <ProfileLinks Icon={LinkedIn} name='LinkedIn' linkto='https://www.linkedin.com/in/bhaktibudimannovanda/' />
                    <ProfileLinks Icon={Facebook} name='Facebook' linkto='https://www.facebook.com/bhakti.fg' />
                    <ProfileLinks Icon={GitHub} name='Github' linkto='https://github.com/bhaktitud' />
                </motion.div>
                <p>All rights reserved 2020, this page built with 1% react & 99% love. *beta-version:1.0*</p>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={container} className='content__right'>
                <motion.div variants={item} className='content__rightButtons'>
                    <PageButtons keyClass='1' linkto='projectsAndExperiments' image={projectExp} title='Project & Experiments'/>
                    <PageButtons keyClass='2' linkto='educations' image={education} title='Educations'/>
                    {/* <PageButtons linkto='experiences' image={exp} title='Experiences'/> */}
                </motion.div>

            </motion.div>
        </motion.div>
    )
}

export default Content
