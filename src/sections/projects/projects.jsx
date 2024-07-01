import './projects.css'
import { projectList } from '../../utils/projectsList'
import { ProjectCard } from '../../components/projectCard/projectCard'

function Projects() {

    return (
        <section className='sectionStyles section'>
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
        </section>
    )
}

export default Projects