import React, {useEffect} from 'react'
import './ProjectsAndExperiments.css'
import ProjectsCard from './ProjectsCard'
import projects from '../../projects.json'
import { motion } from 'framer-motion';

function ProjectsAndExperiments() {
    
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 1,
            staggerChildren: 0.2
          }
        }
    };

    return (
        <div className="projectsAndExperiments">
            <h1 className='projectsAndExperiments__title'>Projects And Experiments</h1>
            <motion.div initial="hidden" animate="visible" variants={container} className='projectsAndExperiments_timeline'>
                {
                    projects?.map(project => (
                        <ProjectsCard 
                            imageUrl={project.imageUrl}
                            authorImage={project.authorImage}
                            authorName={project.authorName}
                            title={project.title}
                            timestamp={project.timestamp}
                            description={project.description}
                            projectLink={project.projectLink}
                            githubLink={project.githubLink}
                        />
                    ))
                }
            </motion.div>
        </div>
    )
}

export default ProjectsAndExperiments
