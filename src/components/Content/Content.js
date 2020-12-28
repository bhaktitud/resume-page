import { AccountTree, CastForEducation, GitHub, LinkedIn, Person, Work } from '@material-ui/icons'
import React from 'react'
import PageButtons from '../PageButtons/PageButtons'
import ProfileLinks from '../ProfileLinks/ProfileLinks'
import './Content.css'

function Content() {
    
    const projectExp = 'https://www.flaticon.com/svg/static/icons/svg/3921/3921399.svg'
    const education = 'https://www.flaticon.com/svg/static/icons/svg/2000/2000887.svg'
    const exp = 'https://www.flaticon.com/svg/static/icons/svg/2726/2726551.svg'


    return (
        <div className='content'>
            <div className='content__left'>
                <h1 className='content__leftName'>Bhakti Budiman Novanda</h1>
                <h3>Front-End Developer</h3>
                <div className='content__leftIcons'>
                    <ProfileLinks Icon={LinkedIn} name='LinkedIn' linkto='#' />
                    <ProfileLinks Icon={GitHub} name='Gitlab' linkto='#' />
                    <ProfileLinks Icon={GitHub} name='Github' linkto='#' />
                </div>
                <p>All rights reserved 2020, this page built with 1% react & 99% love</p>
            </div>

            <div className='content__right'>
                <div className='content__rightButtons'>
                    <PageButtons image={projectExp} title='Project & Experiments'/>
                    <PageButtons image={education} title='Educations'/>
                    <PageButtons image={exp} title='Experiences'/>
                </div>

            </div>
        </div>
    )
}

export default Content
