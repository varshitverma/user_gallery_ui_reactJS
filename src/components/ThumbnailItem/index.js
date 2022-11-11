// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {image, onChangeImg, isActive} = props
  const {thumbnailUrl, thumbnailAltText} = image

  const selectImg = () => {
    onChangeImg(image)
  }

  const opacityClass = isActive ? '' : 'thumbnailImg'

  return (
    <li className="list-item">
      <button className="button" type="button">
        <img
          src={thumbnailUrl}
          className={`${opacityClass}`}
          onClick={selectImg}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
