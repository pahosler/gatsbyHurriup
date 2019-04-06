import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Offerings = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map(item => (
      <div
        key={item.image}
        className='column is-6'
        style={{ borderRadius: '5px' }}>
        <section className='section'>
          <p className='has-text-centered'>
            <img
              alt=''
              src={item.image}
              style={{ height: '200px', width: '200px' }}
            />
          </p>
          <div className='blog-post-content' dangerouslySetInnerHTML={{ __html: item.text }} />
          <Link className='button is-small' to={`/blog/${item.slug}`}>
            Keep Reading →
          </Link>
        </section>
      </div>
    ))}
  </div>
)

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Offerings
