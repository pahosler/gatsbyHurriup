import React from 'react'
import PropTypes from 'prop-types'

const Campaign = ({ contents }) => (
  <div>
    {contents.map((content, id) => (
      <div key={id}>
        <div className='container is-fluid'>
          <div className='columns '>
            <div className='column is-0'>
              <figure className='image is-128x128'>
                <img src={content.image} alt='' />
              </figure>
            </div>
            <div className='column is-10'>
              <p>{content.text}</p>
            </div>
          </div>
        </div>
      </div>

    ))}
  </div>
)

Campaign.propTypes = {
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    }),
  )}

export default Campaign
