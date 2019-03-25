import React from 'react'
import Helmet from 'react-helmet'
import Campaign from '../Campaign'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import logo from '../../assets/img/hurriup-003.png'
import HurricaneVideo from '../HurricaneVideo'
import HurricaneStatic from '../HurricaneStatic'
import DonateTag from '../DonateTag'
import Paypal from '../Paypal'

const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  campaign,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <DonateTag />
    <section className='hero'>
      <div className='hero-body'>
        <HurricaneVideo className={'video-container is-hidden-mobile'} />
        <HurricaneStatic className={'maria-container is-hidden-desktop'} />
        <div className='container'>
          <div className='columns'>
            <div >
              <img src={logo} style={{ height: 80 }} />
              <div style={{width: 300, color: '#ffffff', lineHeight: 1, fontWeight: 'bolder'}}>
                  OUR MISSION AT HURRIUP.ORG IS TO EDUCATE AND INFORM THE PUBLIC
                  ABOUT HURRICANE AWARENESS, PREPARATION AND DIRECTED DISASTER
                  RELIEF.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <h1 className='has-text-weight-semibold has-text-centered'>
                    {heading}
                  </h1>
                  <div>{description}</div>
                </div>
                <div className='paypal'>
                  <Paypal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <Campaign contents={campaign} />
                <div className='paypal'>
                  <Paypal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <Offerings gridItems={offerings.blurbs} />
                  <h2 className='has-text-weight-semibold is-size-2'>
                  Testimonials
                  </h2>
                  <Testimonials testimonials={testimonials} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  campaign: PropTypes.array,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
}

export default HomePageTemplate
