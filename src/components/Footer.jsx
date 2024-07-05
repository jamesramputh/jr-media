import "./Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {

  return (
    <footer>

      <div className="footerNotes">
        <div className="message">
          Made with <FontAwesomeIcon icon="heart" size="1x" className="iconHeart" /> by James
        </div>
      </div>

    </footer>
  )
}

export { Footer }