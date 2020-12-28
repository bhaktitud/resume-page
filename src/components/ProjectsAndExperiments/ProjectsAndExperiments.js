import React, {useEffect} from 'react'
import './ProjectsAndExperiments.css'
import ProjectsCard from './ProjectsCard'
import projects from '../../projects.json'

function ProjectsAndExperiments() {
    
    return (
        <div className="projectsAndExperiments">
            <h1 className='projectsAndExperiments__title'>Projects And Experiments</h1>
            <div className='projectsAndExperiments_timeline'>
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
            </div>
        </div>
    )
}

export default ProjectsAndExperiments
