// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {details} = props
  const {thumbnailUrl, videoUrl} = details
  return (
    <li className="slide-container">
      <Popup
        modal
        trigger={
          <button className="trigger-button" type="button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
        className="popup-container"
      >
        {close => (
          <div className="popup-video-container">
            <button
              type="button"
              data-testid="closeButton"
              className="close-button"
              onClick={() => close()}
              aria-label="close"
            >
              <IoMdClose size="20" color="#616e7c" />
            </button>
            <div className="video-container">
              <ReactPlayer url={videoUrl} controls className="video" />
            </div>
          </div>
        )}
      </Popup>
    </li>
  )
}

export default MovieItem
