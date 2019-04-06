import React from 'react'
import hurricaneVideo from '../../assets/img/hurricane-irma.mp4'

const HurricaneVideo = ({ className }) => (
  <div className={className}>
    <video playsinline autoPlay muted loop poster preload='true' >
      <source src={hurricaneVideo} type='video/mp4' />
    </video>
  </div>
)
export default HurricaneVideo
