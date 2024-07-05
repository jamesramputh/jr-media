import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Header.scss"

const Header = ({ scrollToRef, packagesRef, contactRef}) => {
  const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false)

  const handleClickRef = (ref) => {
    setMobileHeaderOpen(false)
    scrollToRef(ref)
  }
  return (
    <>
      <header className="header">
        <button className="hamburger" onClick={ () => setMobileHeaderOpen(prev => !prev)}>
          <FontAwesomeIcon icon="bars" size="1x" className="iconBars" />
        </button>

        <ul className="desktopHeader">
          <li><button onClick={() => handleClickRef(packagesRef)}>Packages</button></li>
        </ul>

        <div className="namesContainer">
            <span className="names">JR</span>
        </div>

        <ul className="desktopHeader">
          <li><button onClick={() => handleClickRef(contactRef)}>Contact</button></li>
        </ul>

        { mobileHeaderOpen ? (
          <div className="modalOverlay">
            <button onClick={() => setMobileHeaderOpen(false)} className="closeModalButton"><FontAwesomeIcon icon="close" size="2x" className="iconClose" /></button>
            <ul className="mobileHeader">
              <li><button onClick={() => handleClickRef(packagesRef)}>Packages</button></li>
              <li><button onClick={() => handleClickRef(contactRef)}>Contact</button></li>
            </ul> 
          </div>

        ) : null }
      </header>
    </>

  )
}

export { Header }