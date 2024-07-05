/* eslint-disable react/prop-types */
import { TfiWorld } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import "./projectCard.css";
import { useState } from "react";

export function ProjectCard({ children }) {
  const [imagesActives, setImagesActives] = useState({
    CABSA: {
      cabsaDesktop: true,
      cabsaMobile: false,
      cabsaTablet: false,
    },
  });

  function activeImage(e) {
    e.preventDefault();

    const target = e.target.name || e.target.id

    const parent = document.getElementById(target).parentElement.id;

    const lastActives = { ...imagesActives };

    const currentActive = {
      ...lastActives[parent],
    };

    for (let current in currentActive) {
      if (current === target) currentActive[current] = true;
      else currentActive[current] = false;
    }

    setImagesActives({
      ...lastActives,
      [parent]: {
        ...currentActive,
      },
    });
  }

  return (
    <div className="divContainerProjectCard borderRadiusCards">
      <div className="divContainerImages">
        <div className="divContainerImageButtons" id={children.title}>
          {children.images.map((image, key) => {
            return (
              <button onClick={activeImage} id={image.title} key={key} className={
                imagesActives[children.title][image.title]
                  ? "buttonImage"
                  : "buttonDisactive"
              }>
                <img
                  src={image.image}
                  alt={image.title}
                  name={image.title}
                  className="imageButton"
                />
              </button>
            );
          })}
        </div>
        {children.images.map((image, key) => {
          return (
            <img
              src={image.image}
              alt={image.title}
              className={
                imagesActives[children.title][image.title]
                  ? "imgProjectCard"
                  : "imageDisable"
              }
              key={key}
            />
          );
        })}
      </div>
      <h3>{children.title}</h3>
      <div className="divStackContainer">
        {
          children.stack.map((st, key) => {
            return(
              <div key={key} className="divStackIconContainer">
                <img src={st.icon} alt={st.title}/>
                <h6>{st.title}</h6>
              </div>
            )
          })
        }
      </div>
      <p>{children.description}</p>
      <div className="divLinks">
        <a href={children.url} target="_blank" className="aWebSite">
          Website
          <TfiWorld className="iconLinks" />
        </a>
        {children.github ? (
          <a href={children.github} target="_blank" className="aGithub">
            Github
            <FaGithub className="iconLinks" />
          </a>
        ) : undefined}
      </div>
    </div>
  );
}
