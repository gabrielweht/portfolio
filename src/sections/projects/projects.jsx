import './projects.css'
import { projectList } from '../../utils/projectsList'
import { ProjectCard } from '../../components/projectCard/projectCard'

function Projects() {

    return (
        <section className='sectionStyles section' id='projects'>
            <h5>Projects</h5>
            <div className='divContainerProjects'>
                {
                    projectList.map((project, key) => {
                        return(
                            <ProjectCard
                                key={key}
                            >
                                {project}
                            </ProjectCard>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects