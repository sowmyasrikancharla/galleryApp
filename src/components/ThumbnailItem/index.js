// Write your code here.
<<<<<<< HEAD
import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  render() {
    const {imageDetails, changePhoto, isActive} = this.props
    const {
      id,
      imageUrl,
      thumbnailUrl,
      imageAltText,
      thumbnailAltText,
    } = imageDetails
    const onChangePhoto = () => {
      changePhoto(id)
    }

    const styleForSelectedThumbnail = isActive ? 'thumbnailImage' : ''

    return (
      <li className="no-dot">
        <button className="border">
          <img
            src={thumbnailUrl}
            className={normal${styleForSelectedThumbnail}}
            alt={thumbnailAltText}
            onClick={onChangePhoto}
          />
        </button>
      </li>
    )
  }
}
export default ThumbnailItem
=======
>>>>>>> e9ecd4f616a0cd21ad4757474829e8e157dae5b8
