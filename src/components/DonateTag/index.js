import React from 'react'

const DonateTag = () => (
  <div className='donate'>
    <form
      action='https://www.paypal.com/cgi-bin/webscr'
      method='post'
      target='_top'>
      <input name='cmd' type='hidden' value='_s-xclick' />
      <input name='hosted_button_id' type='hidden' value='P2S2YE9E2Z2GG' />
      <button
        alt='PayPal - The safer, easier way to pay online!'
        className='button is-normal btn-donate'
        name='submit'>
        <i className='heart fa fa-heart-o fa-fw' aria-hidden='true' />
        <span id='donate'>DONATE</span>
      </button>
    </form>
  </div>
)

export default DonateTag
