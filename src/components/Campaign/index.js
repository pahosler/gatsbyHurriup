import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Campaign = ({ contents }) => (
  <div>
    {contents.map((content, id) => (
      <div key={id}>
        <div className='container'>
          <div className='columns is-desktop'>
            <div className='column is-offset-2'>
              <img src={content.image} alt='' />
            </div>
            <div className='column is-8'>
              <p>{content.text}</p>
              <Link className='button is-small' to={`/blog/${content.slug}`}>
                Keep Reading →
              </Link>
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
      slug: PropTypes.string,
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Campaign
