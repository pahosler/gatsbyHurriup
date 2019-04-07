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
    <DonateTag />
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-fullheight'>
      <div className='hero-video' >
        <HurricaneVideo className={'is-hidden-mobile'} />
      </div>
      <div className='hero-body is-fullheight'>

        <HurricaneStatic className={'maria-container is-hidden-desktop is-hidden-tablet'} />
        <div className='box is-transparent'>
          <img src={logo} style={{ height: 80 }} />
          <div className='subtitle'
            style={{
              width: 350,
              height: 20,
              color: '#ffffff',
              lineHeight: 1,
              fontWeight: 'bolder',
            }}>
                OUR MISSION AT HURRIUP.ORG IS TO EDUCATE AND INFORM THE PUBLIC
                ABOUT HURRICANE AWARENESS, PREPARATION AND DIRECTED DISASTER
                RELIEF.
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns is-centered'>
            <div className='column is-half'>
              <div className='content'>
                <div>
                  <h1 className='has-text-weight-semibold has-text-centered'>
                    {heading}
                  </h1>
                  <div>
                    <p className='has-text-centered'>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='section'>
      <div className='columns is-mobile is-centered'>
        <div className='content'>
          <Campaign contents={campaign} />
        </div>
      </div>
    </section>

    <section className='section'>
      <div className='columns'>
        <div className='column is-4 is-offset-4'>
          <div className='has-text-centered is-size-2'>
            <div>
              Thank Y
              <i
                className='heart fa fa-heart-o fa-fw is-size-2'
                aria-hidden='true'
                style={{ marginRight: -10 }}
              />
                U for supporting our efforts
            </div>
          </div>
        </div>
      </div>
      <div className='columns'>
        <div className='column is-4 is-offset-4'>
          <article className='message has-text-centered is-darkseagreen' >
            <div style={{float: 'left', marginTop: 40}}>
              <i className='fa fa-quote-left fa-2x fa-fw' />
            </div>
            <div style={
              {
                float: 'right',
                marginTop: 40,
              }} >
              <i className='fa fa-quote-right fa-2x fa-fw' />
            </div>
            <div className='message-body is-size-5'>
                Calamity knows no borders, only Men's minds and maps do.
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns is-desktop'>
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
