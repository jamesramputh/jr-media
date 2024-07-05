import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Hero.scss"

const Hero = ({ scrollToRef, packagesRef}) => {

  const handleClickRef = (ref) => {
    scrollToRef(ref)
  }

  return (
    <div className="heroContainer">
      <div className="heroContent">
        <div className="bubble"><span>HDR Videos/Photos</span> | <span>Mobile Sized Videos</span></div>
        <h1>JR MEDIA</h1>
        <p>Real Estate Photography & Videography</p>
        

        <div className="buttonContainer">
          <button className="moreInformationButton" onClick={() => handleClickRef(packagesRef)}>More Information <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
        </div>

      </div>
      <div className="heroImage"></div>
    </div>
  )
}

export { Hero }
