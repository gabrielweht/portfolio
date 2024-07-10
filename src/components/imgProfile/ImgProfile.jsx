import imgProfile from "../../assets/imgProfile.webp"
import paint from '../../assets/paint.webp'
import './imgProfile.css'

function ImgProfile() {
  return (
    <div className='imgProfile'>
      <img src={paint} alt="paint" className='paint' />
      <img src={imgProfile} alt="Profile Photo" className='myPicture' />
    </div>
  )
}

export default ImgProfile