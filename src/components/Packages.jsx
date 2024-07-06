import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Packages.scss"

const Packages = ({packagesRef}) => {

  return (
    <div className="packagesContainer" ref={packagesRef}>

      <div className="packages">
        <div className="package">
          <h2>Photos <FontAwesomeIcon icon="fa-solid fa-camera" /></h2>
          <p className="message">This package includes HDR photos of interior and exterior.</p>
          <span className="price">$199 <span className="tax">+ HST</span></span>
          <p><FontAwesomeIcon icon="fa-solid fa-check" /> HDR Photos</p>
        </div>

        <div className="package">
          <h2>Photos & Video <FontAwesomeIcon icon="fa-solid fa-camera" /> <FontAwesomeIcon icon="fa-solid fa-video" /></h2>
          <p className="message">This package includes HDR photos of interior and exterior as well as 4K or 1080p video depending on your preference.</p>
          <span className="price">$399 <span className="tax">+ HST</span></span>
          <p><FontAwesomeIcon icon="fa-solid fa-check" /> HDR Photos</p>
          <p><FontAwesomeIcon icon="fa-solid fa-check" /> 4K or 1080p Video</p>
          <p><FontAwesomeIcon icon="fa-solid fa-check" /> Social media video</p>
        </div>

        <div className="package">
          <h2>Photos, Video & Drone <FontAwesomeIcon icon="fa-solid fa-camera" /> <FontAwesomeIcon icon="fa-solid fa-video" /> <FontAwesomeIcon icon="fa-solid fa-mountain-sun" /></h2>
          <p className="message">This package includes everything that is offered in the photo and video package with the addition of aerial drone shots and video.</p>
          <span className="price">$449 <span className="tax">+ HST</span></span>
          <p><FontAwesomeIcon icon="fa-solid fa-check" /> HDR Photos</p>
          <p><FontAwesomeIcon icon="fa-solid fa-check" /> 4K or 1080p Video</p>
          <p><FontAwesomeIcon icon="fa-solid fa-check" /> Social media video</p>
          <p><FontAwesomeIcon icon="fa-solid fa-check" /> Drone Photos & Video</p>
        </div>
      </div>

      <p className="disclaimer">Disclaimer: The prices include travel costs to the property location within the GTA. <br/> For properties outside the GTA, a $50 surcharge will be added.</p>

    </div>
  )
}

export { Packages }
