import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Paypal from '../Paypal'

const Campaign = ({ contents }) => (
  <div>
    {contents.map((content, id) => (
      <div key={id}>
        <div className='columns'>
          <div className='column is-offset-3'>
            <h3 className='is-size-3' > {
              content.heading
            }
            </h3>
          </div>
        </div>

        <div className='columns is-desktop'>
          <div className='column is-offset-1'>

            <img src={content.image} alt='' />
          </div>
          <div className='column is-9 is-narrow'>
            <p className='content' style={{width: '80%'}} dangerouslySetInnerHTML={{__html: content.text}} />
            <Link className='button is-small' to={`/blog/${content.slug}`}>
                Keep Reading →
            </Link>
          </div>
        </div>
        <div className='columns' >
          <div className='column is-10 is-offset-1' >
            <div className='paypal' >
              <Paypal />
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
      heading: PropTypes.string,
    })
  ),
}

export default Campaign
