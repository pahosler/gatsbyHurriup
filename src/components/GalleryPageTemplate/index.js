import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const GalleryPageTemplate = ({
  title,
  meta_title,
  meta_description,
  images,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-dark is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='continer'>
        <div className='section'>
          <div className='masonry'>
            {images.map((image, i) => (
              <div key={i} className='tile'>
                <img className='brick' src={image.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
)

GalleryPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      note: PropTypes.string,
    })
  ),
}

export default GalleryPageTemplate
