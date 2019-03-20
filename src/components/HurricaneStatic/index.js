import React from 'react'
import hurricaneStatic from '../../assets/img/maria-rammb-2117-sep18.jpg'

const HurricaneStatic = ({ className }) => (
  <div className={className}>
    <img className='hurricane-maria' src={hurricaneStatic} />
  </div>
)

export default HurricaneStatic
