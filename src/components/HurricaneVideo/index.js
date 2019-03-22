import React from 'react'
import hurricaneVideo from '../../assets/img/hurricane-irma.mp4'

const HurricaneVideo = ({ className }) => (
  <div className={className}>
    <video autoPlay muted loop preload='true' className='video-bg'>
      <source src={hurricaneVideo} type='video/mp4' />
    </video>
  </div>
)
export default HurricaneVideo
