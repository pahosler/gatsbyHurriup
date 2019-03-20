import React from 'react'
import hurricaneVideo from '../../assets/img/hurricane-irma.mp4'

const HurricaneVideo = ({ className }) => (
  <div className={className}>
    <video
      autoPlay='autoplay'
      className='video-bg'
      loop='loop'
      preload='true'>
      <source src={hurricaneVideo} type='video/mp4' />
    </video>
  </div>
)
export default HurricaneVideo
