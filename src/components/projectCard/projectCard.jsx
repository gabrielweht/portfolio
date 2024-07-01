/* eslint-disable react/prop-types */
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import './projectCard.css'
import { useState } from "react";

export function ProjectCard({children}) {
  const [ imagesActives, setImagesActives ] = useState({
    cabsaDesktop: true
  })

  function activeImage(e){
    e.preventDefault()
    
    const currentActive = {
      ...imagesActives,
      [e.target.name]: !imagesActives[e.target.name]
    }

    setImagesActives({
      ...currentActive
    })

    const hola = document.getElementById(e.target.name).parentElement.id

    console.log(hola)
  }

  return (
    <div className="divContainerProjectCard">
        {
          children.images.map((image, key) => {
            return(
              <div  key={key}>
                <div className="divContainerImageButtons" id={children.title}>
                  <button onClick={activeImage} id={image.title}>
                    <img src={image.image} alt={image.title} name={image.title} className="imageButton"/>
                  </button>
                </div>
                <div>
                  <img src={image.image} alt={image.title} />
                </div>
              </div>
            )
          })
        }
        <header>
          <h3>
            {children.title}
          </h3>
        </header>
        <div className="divLinks">
          <a href={children.url} target='_blank' className='aWebSite'>
            Website
            <TbWorld className="iconLinks"/>
          </a>
          { children.github ? <a href={children.github} target='_blank' className='aGithub'>
            Github
            <FaGithub className="iconLinks"/>
          </a> : undefined}
        </div>
      </div>
  )
}