import React from 'react'
import config from '../../../data/config'

const Footer = () => {
  return (
    <footer className='footer is-warning is-bold'>
      <div className='columns'>
        <div className='column is-4'>
          <div className='content'>
            <div className='content is-size-6' style={{margin: 10}}>
              <ul style={{listStyleType: 'none', lineHeight: 1}}>
                <li>{config.email}</li>
                <li>{config.owner}</li>
                <li>{config.city}</li>
                <li>{config.phone}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='column is-4'>
          <div className='content'>
            <div className='content has-text-centered'>
              <p />
            </div>
          </div>
        </div>
        <div className='column is-4'>
          <div className='content'>
            <div className='content is-size-6'>
              <p>
                hurriup.org is an organization dedicated to helping
                people in disaster stricken areas. We are also here to provide
                information for emergency preparedness in the event of a
                possible natural disaster, i.e. a hurricane.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='columns'>
        <div className='column is-12'>
          <div className='content'>
            <div className='content has-text-centered'>
              <p className='is-size-7' style={{ lineHeight: 1 }}>
                {config.copyright}
              </p>
              <p className='is-size-7' style={{ lineHeight: 1 }}>
                Powered by <a href='https://www.gatsbyjs.org'>Gatsby</a>
              </p>
              <p className='is-size-7'>
                modified with <i className='heart-beat fa fa-heart fa-fw' /> by <a href='https://pahosler.com'>Paul Hosler</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
